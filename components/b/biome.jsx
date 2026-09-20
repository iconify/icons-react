import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpppe-bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpppe-bsi"/>`,
		"fallback": "simple-icons:biome",
	});
}

export default Component;
