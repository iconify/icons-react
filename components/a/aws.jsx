import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk4n348sf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk4n348sf"/>`,
		"fallback": "la:aws",
	});
}

export default Component;
