import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxwcq69ty.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxwcq69ty"/>`,
		"fallback": "dinkie-icons:automobile",
	});
}

export default Component;
