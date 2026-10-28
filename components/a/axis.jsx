import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iyz_0qtmu.css';
import '../../css/w/wmgkkbk6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iyz_0qtmu"/><path class="wmgkkbk6u"/></g>`,
		"fallback": "andrsrxn:axis",
	});
}

export default Component;
