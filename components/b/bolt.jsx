import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s4xnr_bdl.css';
import '../../css/q/q5oszr-ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s4xnr_bdl"/><path class="q5oszr-ig"/></g>`,
		"fallback": "mage:bolt",
	});
}

export default Component;
