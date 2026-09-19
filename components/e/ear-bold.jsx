import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/l/llk457frh.css';
import '../../css/f/fwjghpb0j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="llk457frh"/><path class="fwjghpb0j"/></g>`,
		"fallback": "glyphs:ear-bold",
	});
}

export default Component;
