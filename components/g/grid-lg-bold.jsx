import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpuz_ibvb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpuz_ibvb"/>`,
		"fallback": "glyphs:grid-lg-bold",
	});
}

export default Component;
