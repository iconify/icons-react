import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mamr9hpmo.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mamr9hpmo"/>`,
		"fallback": "iwwa:innowatio-logo",
	});
}

export default Component;
