import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-73oypxc.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/v/vr5f4ibja.css';
import '../../css/w/wjj2bct6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-73oypxc"/><path class="tm0ea5ulw"/><path class="vr5f4ibja"/><path class="wjj2bct6f"/></g>`,
		"fallback": "andrsrxn:copy-text",
	});
}

export default Component;
