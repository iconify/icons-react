import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/s/ssl_3xysf.css';
import '../../css/q/qpkxa-btu.css';
import '../../css/o/oc_eq5b5a.css';
import '../../css/y/yvjf8fbmj.css';
import '../../css/w/wjncgw1fq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="ssl_3xysf"/><circle class="qpkxa-btu"/><path class="oc_eq5b5a"/><path class="yvjf8fbmj"/><path class="wjncgw1fq"/>`,
		"fallback": "fxemoji:confused",
	});
}

export default Component;
