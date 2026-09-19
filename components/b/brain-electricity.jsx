import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlo7xjcjj.css';
import '../../css/j/j6scfrbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wlo7xjcjj"/><path class="j6scfrbcz"/></g>`,
		"fallback": "iconoir:brain-electricity",
	});
}

export default Component;
