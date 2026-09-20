import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrle2dkdg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrle2dkdg"/>`,
		"fallback": "la:greater-than-equal",
	});
}

export default Component;
