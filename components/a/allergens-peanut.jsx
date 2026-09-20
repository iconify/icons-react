import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dljovk54y.css';
import '../../css/q/qkj682oju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dljovk54y"/><path class="qkj682oju"/></g>`,
		"fallback": "streamline-sharp:allergens-peanut",
	});
}

export default Component;
