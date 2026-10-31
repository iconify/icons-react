import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dki-1w-8i.css';
import '../../css/s/s1c8xvkzj.css';
import '../../css/i/iq_z596tt.css';
import '../../css/y/y1n_k57xm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dki-1w-8i"/><path class="s1c8xvkzj"/><path class="iq_z596tt"/><path class="y1n_k57xm"/>`,
		"fallback": "tabler-flags:hong-kong",
	});
}

export default Component;
