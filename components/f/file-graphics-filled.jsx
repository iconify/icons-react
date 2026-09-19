import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-wqvvv2r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-wqvvv2r"/>`,
		"fallback": "dinkie-icons:file-graphics-filled",
	});
}

export default Component;
