import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pht-9fylt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pht-9fylt"/>`,
		"fallback": "la:eye-slash",
	});
}

export default Component;
