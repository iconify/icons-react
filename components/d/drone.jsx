import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/im3uwlbyi.css';
import '../../css/s/s9nk4bcpf.css';
import '../../css/v/vxuvzlqhl.css';
import '../../css/z/zfmni8bjj.css';
import '../../css/f/fn9gabbdu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="im3uwlbyi"/><path class="s9nk4bcpf"/><path class="vxuvzlqhl"/><path class="zfmni8bjj"/><path class="fn9gabbdu"/></g>`,
		"fallback": "streamline-color:drone",
	});
}

export default Component;
