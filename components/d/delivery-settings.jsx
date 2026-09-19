import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el98wicub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el98wicub"/>`,
		"fallback": "carbon:delivery-settings",
	});
}

export default Component;
