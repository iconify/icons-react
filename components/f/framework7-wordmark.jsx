import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3-45-brm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3-45-brm"/>`,
		"fallback": "devicon:framework7-wordmark",
	});
}

export default Component;
