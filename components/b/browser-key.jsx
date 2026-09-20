import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mp2i09jnb.css';
import '../../css/y/yovjd0b3i.css';
import '../../css/l/l3k3plb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mp2i09jnb"/><path class="yovjd0b3i"/><path class="l3k3plb5z"/></g>`,
		"fallback": "streamline-sharp:browser-key",
	});
}

export default Component;
