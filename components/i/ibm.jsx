import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwuf2jxfe.css';

const viewBox = {"width":1000,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwuf2jxfe"/>`,
		"fallback": "thesvg-color:ibm",
	});
}

export default Component;
