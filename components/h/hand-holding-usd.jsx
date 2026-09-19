import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr2asabhn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr2asabhn"/>`,
		"fallback": "fa-solid:hand-holding-usd",
	});
}

export default Component;
