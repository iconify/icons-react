import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/ddubuf51j.css';
import '../../css/i/ieuur3b8f.css';
import '../../css/w/w4vpg2m1r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ddubuf51j"/><path class="ieuur3b8f"/><path class="w4vpg2m1r"/></g>`,
		"fallback": "glyphs:gift-1-duo",
	});
}

export default Component;
