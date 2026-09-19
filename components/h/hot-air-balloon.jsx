import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-ceaxs0e.css';
import '../../css/n/nklb3x5wx.css';
import '../../css/o/okq48lvzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f-ceaxs0e"/><path class="nklb3x5wx"/><path class="okq48lvzo"/></g>`,
		"fallback": "hugeicons:hot-air-balloon",
	});
}

export default Component;
