import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx5rh7b8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx5rh7b8c"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-live-status",
	});
}

export default Component;
