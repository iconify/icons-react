import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt9l7tg7v.css';
import '../../css/g/gf8zvzb-o.css';
import '../../css/r/rkm926b8g.css';
import '../../css/y/yudx6acyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt9l7tg7v"/><path class="gf8zvzb-o"/><path class="rkm926b8g"/><path class="yudx6acyj"/></g>`,
		"fallback": "andrsrxn:hand-waving",
	});
}

export default Component;
