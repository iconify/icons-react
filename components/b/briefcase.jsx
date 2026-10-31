import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0sdi7f7k.css';
import '../../css/e/et8h5kbcp.css';
import '../../css/f/fafyxccxn.css';
import '../../css/h/h3z_zgaej.css';
import '../../css/k/khnzb1bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c0sdi7f7k wm-shadow"/><path class="et8h5kbcp wm-shadow"/><path class="fafyxccxn"/><path class="h3z_zgaej"/><path class="khnzb1bpn"/></g>`,
		"fallback": "withicons-brutal:briefcase",
	});
}

export default Component;
