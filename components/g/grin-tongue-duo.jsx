import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/p/psjnp-bmx.css';
import '../../css/t/tt1j1pb5b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="psjnp-bmx"/><path class="tt1j1pb5b"/></g>`,
		"fallback": "glyphs:grin-tongue-duo",
	});
}

export default Component;
