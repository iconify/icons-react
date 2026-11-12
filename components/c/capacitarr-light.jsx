import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3307tvyz.css';
import '../../css/m/moiam8ufc.css';
import '../../css/o/ox9d4xb-r.css';
import '../../css/q/qmq6jwbvn.css';
import '../../css/l/l1kemhbsc.css';
import '../../css/z/ztcv70bpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3307tvyz"/><circle class="moiam8ufc"/><path class="ox9d4xb-r"/><path class="qmq6jwbvn"/><path class="l1kemhbsc"/><circle class="ztcv70bpv"/>`,
		"fallback": "selfhst:capacitarr-light",
	});
}

export default Component;
