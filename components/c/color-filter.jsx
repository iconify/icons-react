import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wascf2ujt.css';
import '../../css/w/wee2qvrei.css';
import '../../css/t/timostb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wascf2ujt"/><path class="wee2qvrei"/><path class="timostb6x"/></g>`,
		"fallback": "iconoir:color-filter",
	});
}

export default Component;
