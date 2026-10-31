import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3gha89hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3gha89hg"/>`,
		"fallback": "coolicons:building-2-fill-round",
	});
}

export default Component;
