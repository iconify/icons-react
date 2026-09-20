import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ejdkgccas.css';
import '../../css/e/eefesfbec.css';
import '../../css/s/s9pl2sawz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ejdkgccas"/><path class="eefesfbec"/><path class="s9pl2sawz"/></g>`,
		"fallback": "solar:chat-square-quote-broken",
	});
}

export default Component;
