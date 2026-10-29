import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ntjsxb_ty.css';
import '../../css/j/jjga-eber.css';
import '../../css/t/t048yihdc.css';
import '../../css/l/lap-h8eft.css';
import '../../css/f/fzlatcc_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ntjsxb_ty wm-k"/><path class="jjga-eber wm-shadow"/><path class="t048yihdc wm-k"/><path class="lap-h8eft wm-k"/><path class="fzlatcc_e wm-a"/></g>`,
		"fallback": "withicons:door-open-engrave",
	});
}

export default Component;
