import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmz_29bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmz_29bxz"/>`,
		"fallback": "mingcute:between-vertical-start-line",
	});
}

export default Component;
