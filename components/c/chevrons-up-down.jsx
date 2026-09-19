import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/krxklbc9m.css';
import '../../css/q/qfkxnub4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="krxklbc9m"/><path class="qfkxnub4x"/></g>`,
		"fallback": "charm:chevrons-up-down",
	});
}

export default Component;
