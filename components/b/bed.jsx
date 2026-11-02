import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yk6z--b7f.css';
import '../../css/c/cx719ibex.css';
import '../../css/x/x2qkt4bza.css';
import '../../css/o/o37ep4the.css';
import '../../css/f/fzxwexbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yk6z--b7f"/><path class="cx719ibex"/><path class="x2qkt4bza"/><path class="o37ep4the"/><path class="fzxwexbbl"/></g>`,
		"fallback": "matita:bed",
	});
}

export default Component;
