import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7e8e6k9m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7e8e6k9m"/>`,
		"fallback": "la:dev",
	});
}

export default Component;
