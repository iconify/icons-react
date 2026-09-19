import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nifbwvzib.css';
import '../../css/q/qp17nzbtl.css';
import '../../css/y/y9ni_79go.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nifbwvzib"/><path class="qp17nzbtl"/><path class="y9ni_79go"/></g>`,
		"fallback": "glyphs:gift-card",
	});
}

export default Component;
