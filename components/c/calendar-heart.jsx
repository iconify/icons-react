import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_p5ss2vo.css';
import '../../css/d/dxkcl5b5x.css';
import '../../css/c/chebvlbdx.css';
import '../../css/y/yfwid-gza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="k_p5ss2vo"/><path class="dxkcl5b5x"/><path class="chebvlbdx"/><path class="yfwid-gza"/></g>`,
		"fallback": "andrsrxn:calendar-heart",
	});
}

export default Component;
