import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy6tfkbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy6tfkbil"/>`,
		"fallback": "coolicons:building-4-round",
	});
}

export default Component;
