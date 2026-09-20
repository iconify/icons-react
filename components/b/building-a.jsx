import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jzqtrlbxl.css';
import '../../css/x/x_x71gbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jzqtrlbxl"/><path class="x_x71gbpc"/></g>`,
		"fallback": "mage:building-a",
	});
}

export default Component;
