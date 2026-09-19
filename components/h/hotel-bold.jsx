import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ikxsibb_g.css';
import '../../css/u/uiub3vbqi.css';
import '../../css/v/vr22xdgds.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ikxsibb_g"/><path class="uiub3vbqi"/><path class="vr22xdgds"/></g>`,
		"fallback": "glyphs:hotel-bold",
	});
}

export default Component;
