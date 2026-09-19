import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b_5bxwb9j.css';
import '../../css/c/cfzw2sz3i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b_5bxwb9j"/><path class="cfzw2sz3i"/></g>`,
		"fallback": "glyphs:eye",
	});
}

export default Component;
