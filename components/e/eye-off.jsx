import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wl_rm_b1u.css';
import '../../css/q/qewkw1bch.css';
import '../../css/t/tzn5-tbgj.css';
import '../../css/j/j6y_b4ril.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wl_rm_b1u"/><path class="qewkw1bch"/><path class="tzn5-tbgj"/><path class="j6y_b4ril"/></g>`,
		"fallback": "matita:eye-off",
	});
}

export default Component;
