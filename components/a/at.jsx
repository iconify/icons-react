import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q718doyav.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q718doyav"/>`,
		"fallback": "fa:at",
	});
}

export default Component;
