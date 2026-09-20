import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g5ncw42dh.css';
import '../../css/q/q5hmxc_qj.css';
import '../../css/i/iyreedmkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g5ncw42dh"/><path class="q5hmxc_qj"/><path class="iyreedmkv"/></g>`,
		"fallback": "keyline-icons:file-off-sharp-two-tone",
	});
}

export default Component;
