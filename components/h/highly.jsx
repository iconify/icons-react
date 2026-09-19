import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5q9ibk_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5q9ibk_z"/>`,
		"fallback": "cib:highly",
	});
}

export default Component;
