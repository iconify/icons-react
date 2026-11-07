import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crvqngn_d.css';
import '../../css/b/bpnbo6b_t.css';
import '../../css/e/ezp-_fbbx.css';
import '../../css/q/q38813opj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crvqngn_d"/><path class="bpnbo6b_t"/><path clip-rule="evenodd" class="ezp-_fbbx"/><path clip-rule="evenodd" class="q38813opj"/>`,
		"fallback": "solar:airbuds-bold",
	});
}

export default Component;
