import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz-zpsb4c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz-zpsb4c"/>`,
		"fallback": "la:anchor-solid",
	});
}

export default Component;
