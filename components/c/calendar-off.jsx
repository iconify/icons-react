import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p0tjnso3b.css';
import '../../css/c/clxcehbcv.css';
import '../../css/b/biv-r_b9a.css';
import '../../css/y/yk993owos.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p0tjnso3b"/><path class="clxcehbcv wm-shine"/><path class="biv-r_b9a wm-k"/><path class="wm-a yk993owos"/><path class="qr4ochb5c wm-s"/><path class="i1g1qkwrt wm-deco"/></g>`,
		"fallback": "withicons-kawaii:calendar-off",
	});
}

export default Component;
