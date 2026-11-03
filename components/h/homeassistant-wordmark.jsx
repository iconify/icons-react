import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2hr1xjqd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2hr1xjqd"/>`,
		"fallback": "devicon-plain:homeassistant-wordmark",
	});
}

export default Component;
