import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjdhk0boj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjdhk0boj"/>`,
		"fallback": "devicon-plain:insomnia-wordmark",
	});
}

export default Component;
