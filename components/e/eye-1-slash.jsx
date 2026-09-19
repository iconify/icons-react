import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u5klyabmf.css';
import '../../css/k/k6pegacqd.css';
import '../../css/i/io6o-5bro.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u5klyabmf"/><path class="k6pegacqd"/><path class="io6o-5bro"/></g>`,
		"fallback": "glyphs:eye-1-slash",
	});
}

export default Component;
