import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ficfedu0u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ficfedu0u"/>`,
		"fallback": "devicon:checkmk-wordmark",
	});
}

export default Component;
