import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ekj00mz3x.css';
import '../../css/v/vzcrb8non.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ekj00mz3x"/><path class="vzcrb8non"/></g>`,
		"fallback": "cryptocurrency-color:fsn",
	});
}

export default Component;
