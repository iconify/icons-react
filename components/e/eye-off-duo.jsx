import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5utv-8st.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/g/gcl_rzbbb.css';
import '../../css/c/cph2zc1da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k5utv-8st"/><path class="qr4ochb5c wm-s"/><path class="gcl_rzbbb"/><path class="cph2zc1da wm-a"/></g>`,
		"fallback": "withicons:eye-off-duo",
	});
}

export default Component;
