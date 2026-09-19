import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/viffdvb1f.css';
import '../../css/h/hioaetbpt.css';
import '../../css/b/bq582cd1i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="viffdvb1f"/><path class="hioaetbpt"/><path class="bq582cd1i"/></g>`,
		"fallback": "glyphs:fire-smoke",
	});
}

export default Component;
