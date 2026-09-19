import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/khff3selz.css';
import '../../css/g/gwugs5bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="khff3selz"/><path class="gwugs5bdj"/></g>`,
		"fallback": "iconoir:iconoir",
	});
}

export default Component;
