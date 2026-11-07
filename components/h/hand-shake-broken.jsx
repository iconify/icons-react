import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tf_xfjxyi.css';
import '../../css/r/rwyyhnb2f.css';
import '../../css/s/s76b8cctz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tf_xfjxyi"/><path class="rwyyhnb2f"/><path class="s76b8cctz"/></g>`,
		"fallback": "solar:hand-shake-broken",
	});
}

export default Component;
