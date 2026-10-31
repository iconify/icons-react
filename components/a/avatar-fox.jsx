import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hsoaook0r.css';
import '../../css/f/fqxf_cbxw.css';
import '../../css/i/ipq0p851b.css';
import '../../css/p/p2-1p88xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hsoaook0r wm-shadow"/><path class="fqxf_cbxw wm-shadow"/><path class="ipq0p851b"/><path class="p2-1p88xq"/></g>`,
		"fallback": "withicons-brutal:avatar-fox",
	});
}

export default Component;
