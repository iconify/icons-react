import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6xx_uqow.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6xx_uqow"/>`,
		"fallback": "thesvg-color:inflection-ai-dark",
	});
}

export default Component;
