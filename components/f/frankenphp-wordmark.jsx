import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7rn45-1q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7rn45-1q"/>`,
		"fallback": "devicon-plain:frankenphp-wordmark",
	});
}

export default Component;
