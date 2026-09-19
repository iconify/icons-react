import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghybnh57b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghybnh57b"/>`,
		"fallback": "boxicons:align-right-filled",
	});
}

export default Component;
