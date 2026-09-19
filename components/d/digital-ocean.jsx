import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7b46bbwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7b46bbwg"/>`,
		"fallback": "fa-brands:digital-ocean",
	});
}

export default Component;
