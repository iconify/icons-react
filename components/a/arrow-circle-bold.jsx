import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2if9lbnj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2if9lbnj"/>`,
		"fallback": "glyphs:arrow-circle-bold",
	});
}

export default Component;
