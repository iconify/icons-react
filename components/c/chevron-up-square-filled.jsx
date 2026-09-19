import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/argd03b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="argd03b6w"/>`,
		"fallback": "boxicons:chevron-up-square-filled",
	});
}

export default Component;
