import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2pcyob-o.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2pcyob-o"/>`,
		"fallback": "fontisto:hourglass-start",
	});
}

export default Component;
