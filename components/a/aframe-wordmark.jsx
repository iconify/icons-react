import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9auvtbzi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9auvtbzi"/>`,
		"fallback": "devicon:aframe-wordmark",
	});
}

export default Component;
