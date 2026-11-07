import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wwa_f4b-v.css';
import '../../css/u/uagfkn6wc.css';
import '../../css/a/a6db_vbnj.css';
import '../../css/k/kx7ftwqzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wwa_f4b-v"/><path class="uagfkn6wc"/><path class="a6db_vbnj"/><path class="kx7ftwqzz"/></g>`,
		"fallback": "solar:chandelier-broken",
	});
}

export default Component;
