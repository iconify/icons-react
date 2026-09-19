import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5mkz9bge.css';
import '../../css/l/lchq2yzxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f5mkz9bge"/><path class="lchq2yzxh"/></g>`,
		"fallback": "hugeicons:apple-reminder",
	});
}

export default Component;
