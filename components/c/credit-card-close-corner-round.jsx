import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxw22obcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxw22obcs"/>`,
		"fallback": "coolicons:credit-card-close-corner-round",
	});
}

export default Component;
