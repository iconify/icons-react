import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g581yabrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g581yabrp"/>`,
		"fallback": "ri:home-3-line",
	});
}

export default Component;
