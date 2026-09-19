import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il83-8b-e.css';
import '../../css/c/c579g-kji.css';
import '../../css/u/uukk0ccsz.css';
import '../../css/c/cz87yab3o.css';
import '../../css/y/y7vtg5pyk.css';
import '../../css/w/wfdo5dbcx.css';
import '../../css/m/mib1rabbt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="il83-8b-e"/><path clip-rule="evenodd" class="c579g-kji"/><ellipse transform="rotate(12 20.145 54.43)" class="uukk0ccsz"/><path clip-rule="evenodd" class="cz87yab3o"/><path clip-rule="evenodd" class="y7vtg5pyk"/><ellipse transform="rotate(168 26.965 30.35)scale(1 -1)" class="wfdo5dbcx"/><path clip-rule="evenodd" class="mib1rabbt"/></g>`,
		"fallback": "glyphs-poly:binoculars-1",
	});
}

export default Component;
