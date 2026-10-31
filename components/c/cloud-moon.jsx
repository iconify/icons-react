import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/che47zb5i.css';
import '../../css/m/m5h_g-b5j.css';
import '../../css/s/spe_r7b2a.css';
import '../../css/a/a5dblsbwj.css';
import '../../css/d/dnr4o821s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="che47zb5i wm-shadow"/><path class="m5h_g-b5j wm-shadow"/><path class="spe_r7b2a"/><path class="a5dblsbwj"/><path class="dnr4o821s"/></g>`,
		"fallback": "withicons-brutal:cloud-moon",
	});
}

export default Component;
