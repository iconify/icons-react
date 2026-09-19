import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxlk60b9n.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxlk60b9n"/>`,
		"fallback": "vs:clip-note",
	});
}

export default Component;
