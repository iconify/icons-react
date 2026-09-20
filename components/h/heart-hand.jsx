import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f8fy4xbdj.css';
import '../../css/t/t2mny5whl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f8fy4xbdj"/><path class="t2mny5whl"/></g>`,
		"fallback": "reicon:heart-hand",
	});
}

export default Component;
