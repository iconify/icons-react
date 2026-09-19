import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nok9es6en.css';
import '../../css/f/fuvaydbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nok9es6en"/><path class="fuvaydbpg"/></g>`,
		"fallback": "iconoir:crop-rotate-tr",
	});
}

export default Component;
