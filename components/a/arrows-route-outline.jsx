import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl1s8xrfw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xl1s8xrfw"/>`,
		"fallback": "glyphs:arrows-route-outline",
	});
}

export default Component;
