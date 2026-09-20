import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfc_4d04d.css';
import '../../css/q/q1-5e3bpd.css';
import '../../css/b/bjzdabcvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfc_4d04d"/><path class="q1-5e3bpd"/><path clip-rule="evenodd" class="bjzdabcvn"/>`,
		"fallback": "mingcute:base-station-2-fill",
	});
}

export default Component;
