import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sya77cctx.css';
import '../../css/h/hrqd55bed.css';
import '../../css/m/mnxlbl_dl.css';
import '../../css/y/yrp2k7bbm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sya77cctx"/><path class="hrqd55bed"/><path class="mnxlbl_dl"/><path class="yrp2k7bbm"/></g>`,
		"fallback": "glyphs:burn-outline",
	});
}

export default Component;
