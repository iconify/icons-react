import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_flrekgq.css';
import '../../css/k/k3o277bnc.css';
import '../../css/o/okdmb64yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_flrekgq"/><path class="k3o277bnc"/><path class="okdmb64yp"/>`,
		"fallback": "bx:fingerprint",
	});
}

export default Component;
