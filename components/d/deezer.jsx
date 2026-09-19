import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4w89svje.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4w89svje"/>`,
		"fallback": "fa6-brands:deezer",
	});
}

export default Component;
