import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qndom7bvy.css';
import '../../css/p/pmjsmc78b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qndom7bvy"/><path class="pmjsmc78b"/></g>`,
		"fallback": "hugeicons:beer-off",
	});
}

export default Component;
