import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qig0jrbck.css';
import '../../css/t/txunxsk1p.css';
import '../../css/k/k4zv6th2j.css';
import '../../css/z/zeqm8jz8e.css';
import '../../css/n/n_11z4psr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qig0jrbck wm-shadow"/><path class="txunxsk1p wm-shadow"/><path class="k4zv6th2j"/><path class="zeqm8jz8e"/><path class="n_11z4psr"/></g>`,
		"fallback": "withicons-brutal:golf",
	});
}

export default Component;
