import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/onk8mrkqg.css';
import '../../css/a/az5a16bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="onk8mrkqg"/><path class="az5a16bac"/></g>`,
		"fallback": "solar:arrow-up-line-duotone",
	});
}

export default Component;
