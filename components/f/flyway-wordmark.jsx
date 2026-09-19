import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fept4eb5z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fept4eb5z"/>`,
		"fallback": "devicon:flyway-wordmark",
	});
}

export default Component;
