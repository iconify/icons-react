import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w63tedcfl.css';
import '../../css/f/f_2qjsb7v.css';
import '../../css/n/nc19r8l8f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w63tedcfl"/><path class="f_2qjsb7v"/><path class="nc19r8l8f"/>`,
		"fallback": "devicon:eslint-wordmark",
	});
}

export default Component;
