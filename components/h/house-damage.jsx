import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ksso_xfmr.css';
import '../../css/q/qysl9rb8l.css';
import '../../css/b/bel2kzo2b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ksso_xfmr"/><path class="qysl9rb8l"/><path class="bel2kzo2b"/></g>`,
		"fallback": "glyphs:house-damage",
	});
}

export default Component;
