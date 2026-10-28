import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdp4dpb7d.css';
import '../../css/x/xl1uujblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cdp4dpb7d"/><path class="xl1uujblh"/></g>`,
		"fallback": "andrsrxn:currency-ils",
	});
}

export default Component;
