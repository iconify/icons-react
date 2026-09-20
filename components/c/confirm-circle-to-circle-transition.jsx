import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/q/q9aucu.css';
import '../../css/n/nfmr0h.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c q9aucu"/><path class="a0m25c nfmr0h"/>`,
		"fallback": "line-md:confirm-circle-to-circle-transition",
	});
}

export default Component;
