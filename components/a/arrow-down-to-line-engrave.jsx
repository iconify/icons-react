import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l2699lbin.css';
import '../../css/k/k1qcotb5x.css';
import '../../css/f/fdriymrrk.css';
import '../../css/m/maguq-_ya.css';
import '../../css/e/eyr57ibcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l2699lbin wm-k"/><path class="k1qcotb5x wm-a"/><path class="fdriymrrk wm-shadow"/><path class="maguq-_ya wm-a"/><path class="eyr57ibcj wm-k"/></g>`,
		"fallback": "withicons:arrow-down-to-line-engrave",
	});
}

export default Component;
