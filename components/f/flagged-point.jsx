import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-tgzfbsj.css';
import '../../css/l/lprhe1imq.css';
import '../../css/g/g779rpbcx.css';
import '../../css/z/z04drlb1l.css';
import '../../css/z/zwjkv-yck.css';
import '../../css/o/oyicbdmac.css';
import '../../css/i/i250zzb-c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-tgzfbsj"/><ellipse class="lprhe1imq"/><path class="g779rpbcx"/><g class="z04drlb1l"><path class="zwjkv-yck"/><path class="oyicbdmac"/><path class="i250zzb-c"/></g>`,
		"fallback": "openmoji:flagged-point",
	});
}

export default Component;
