import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlly8rb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlly8rb1f"/>`,
		"fallback": "cbi:geely",
	});
}

export default Component;
