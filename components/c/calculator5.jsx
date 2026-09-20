import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fem08kbhv.css';
import '../../css/x/x2ngygufn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fem08kbhv"/><path class="x2ngygufn"/></g>`,
		"fallback": "reicon:calculator5",
	});
}

export default Component;
