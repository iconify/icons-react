import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4g0wfbny.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4g0wfbny"/>`,
		"fallback": "devicon-plain:babylonjs-wordmark",
	});
}

export default Component;
