import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdop1ebcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdop1ebcg"/>`,
		"fallback": "coolicons:bulb-sparkle-round",
	});
}

export default Component;
