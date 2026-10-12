import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/na_ij8bwy.css';
import '../../css/y/yrazfwbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="na_ij8bwy"/><path class="yrazfwbuq"/></g>`,
		"fallback": "andrsrxn:exclamation-mark",
	});
}

export default Component;
