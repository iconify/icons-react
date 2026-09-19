import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t3kqcbgbr.css';
import '../../css/i/i834uqbpb.css';
import '../../css/c/c3p-kidqt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t3kqcbgbr"/><path class="i834uqbpb"/><path class="c3p-kidqt"/></g>`,
		"fallback": "glyphs:bandage-1",
	});
}

export default Component;
