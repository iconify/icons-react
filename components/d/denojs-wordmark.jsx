import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8e6r52as.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8e6r52as"/>`,
		"fallback": "devicon:denojs-wordmark",
	});
}

export default Component;
