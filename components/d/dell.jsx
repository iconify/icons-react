import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0ruxsi2z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0ruxsi2z"/>`,
		"fallback": "cib:dell",
	});
}

export default Component;
