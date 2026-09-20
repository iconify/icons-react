import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ojqc5kbbb.css';
import '../../css/q/qsns_6sgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ojqc5kbbb"/><path class="qsns_6sgf"/></g>`,
		"fallback": "proicons:compose",
	});
}

export default Component;
