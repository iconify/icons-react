import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc_ggwbfn.css';
import '../../css/n/nzf-rrbnz.css';
import '../../css/u/ups1br8xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kc_ggwbfn"/><path class="nzf-rrbnz"/><circle class="ups1br8xq"/></g>`,
		"fallback": "proicons:comment-exclamation",
	});
}

export default Component;
