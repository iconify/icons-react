import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xhkw50bnm.css';
import '../../css/a/aqxo_qbvg.css';
import '../../css/p/pmhy0ibjl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xhkw50bnm"/><path class="aqxo_qbvg"/><path class="pmhy0ibjl"/></g>`,
		"fallback": "glyphs:heartbeat",
	});
}

export default Component;
