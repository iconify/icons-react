import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6mstu8gp.css';
import '../../css/h/hplljm8we.css';
import '../../css/v/v96in2bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s6mstu8gp"><path class="hplljm8we"/><path class="v96in2bls"/></g>`,
		"fallback": "gcp:automl-natural-language",
	});
}

export default Component;
