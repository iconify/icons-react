import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjbuujh0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjbuujh0g"/>`,
		"fallback": "solar:arrow-down-broken",
	});
}

export default Component;
