import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs8_8gyor.css';
import '../../css/i/it0xahcfp.css';
import '../../css/z/zqsykkb_l.css';
import '../../css/w/w_eif1beq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qs8_8gyor"/><path class="it0xahcfp"/><path class="zqsykkb_l"/><path class="w_eif1beq"/></g>`,
		"fallback": "glyphs:battery-2-duo",
	});
}

export default Component;
