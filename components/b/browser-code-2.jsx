import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mp2i09jnb.css';
import '../../css/j/j-knq17ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mp2i09jnb"/><path class="j-knq17ur"/></g>`,
		"fallback": "streamline-sharp:browser-code-2",
	});
}

export default Component;
