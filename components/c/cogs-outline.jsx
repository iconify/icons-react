import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e-z44lbla.css';
import '../../css/a/avcx4hq7n.css';
import '../../css/f/fy2zc5bup.css';
import '../../css/t/t0xorbc6d.css';
import '../../css/a/aziermbgd.css';
import '../../css/o/oduqhcb3f.css';
import '../../css/u/urlbn1smx.css';
import '../../css/k/keim_t88v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e-z44lbla"/><path class="avcx4hq7n"/><path class="fy2zc5bup"/><path class="t0xorbc6d"/><path class="aziermbgd"/><path class="oduqhcb3f"/><path class="urlbn1smx"/><path class="keim_t88v"/></g>`,
		"fallback": "glyphs:cogs-outline",
	});
}

export default Component;
