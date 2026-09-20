import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh5w3rbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh5w3rbjg"/>`,
		"fallback": "typcn:arrow-loop-outline",
	});
}

export default Component;
