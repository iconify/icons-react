import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oywncb5to.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oywncb5to"/>`,
		"fallback": "thesvg-color:inflection-ai-light",
	});
}

export default Component;
