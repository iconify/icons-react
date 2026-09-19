import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aodfskbyp.css';
import '../../css/q/q0j2kvbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aodfskbyp"/><path class="q0j2kvbkg"/></g>`,
		"fallback": "iconoir:bathroom",
	});
}

export default Component;
