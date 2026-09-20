import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gwch8dg2h.css';
import '../../css/a/ayl35hsyj.css';
import '../../css/i/icz5thi1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gwch8dg2h"/><path class="ayl35hsyj"/><path class="icz5thi1w"/></g>`,
		"fallback": "streamline-ultimate:calendar-edit-1",
	});
}

export default Component;
