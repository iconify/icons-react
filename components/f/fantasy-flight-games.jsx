import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahk1xk91p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahk1xk91p"/>`,
		"fallback": "fa-brands:fantasy-flight-games",
	});
}

export default Component;
