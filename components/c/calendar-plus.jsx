import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/oh2g-m5tx.css';
import '../../css/b/bkf45ja_z.css';
import '../../css/w/w7yd7qdhf.css';
import '../../css/y/yv1tzmg8u.css';
import '../../css/v/vbiynibwx.css';
import '../../css/w/wap2yzbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="oh2g-m5tx"/><path class="bkf45ja_z"/><path class="w7yd7qdhf"/><path class="yv1tzmg8u"/><path class="vbiynibwx"/><path class="wap2yzbug"/></g>`,
		"fallback": "matita:calendar-plus",
	});
}

export default Component;
