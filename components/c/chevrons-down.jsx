import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n185p7bwm.css';
import '../../css/i/iylza4btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n185p7bwm"/><path class="iylza4btn"/>`,
		"fallback": "bxs:chevrons-down",
	});
}

export default Component;
