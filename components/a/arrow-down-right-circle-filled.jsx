import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frbvlobom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frbvlobom"/>`,
		"fallback": "boxicons:arrow-down-right-circle-filled",
	});
}

export default Component;
