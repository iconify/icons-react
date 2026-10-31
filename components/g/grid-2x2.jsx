import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/e/erc72acrq.css';
import '../../css/b/be3qrwu9i.css';
import '../../css/e/eczqvsbgp.css';
import '../../css/q/q3vdnhbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="erc72acrq"/><path class="be3qrwu9i"/><path class="eczqvsbgp"/><path class="q3vdnhbkv"/></g>`,
		"fallback": "withicons-brutal:grid-2x2",
	});
}

export default Component;
