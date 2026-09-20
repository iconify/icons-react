import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nsj1q8bmg.css';
import '../../css/j/j0o9o7qli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nsj1q8bmg"/><path class="j0o9o7qli"/></g>`,
		"fallback": "mage:first-aid-kit",
	});
}

export default Component;
