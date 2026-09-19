import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h4ip7lbpf.css';
import '../../css/s/s5vktnbeo.css';
import '../../css/u/unskt_bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h4ip7lbpf"/><path class="s5vktnbeo"/><path class="unskt_bda"/></g>`,
		"fallback": "hugeicons:ai-lock",
	});
}

export default Component;
