import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzmi8obmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzmi8obmg"/>`,
		"fallback": "solar:arrow-right-down-bold",
	});
}

export default Component;
