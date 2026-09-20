import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/ho18gccjz.css';
import '../../css/w/wpfc0c76o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ho18gccjz"/><path class="wpfc0c76o"/></g>`,
		"fallback": "reicon:dollar-square",
	});
}

export default Component;
