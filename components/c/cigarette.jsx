import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j18kxf9it.css';
import '../../css/i/imgffbcny.css';
import '../../css/h/hq1suubiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="j18kxf9it"/><rect class="imgffbcny"/><path class="hq1suubiu"/></g>`,
		"fallback": "andrsrxn:cigarette",
	});
}

export default Component;
