import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azt4s9ayv.css';
import '../../css/n/n1b9jrbgq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azt4s9ayv"/><path class="n1b9jrbgq"/>`,
		"fallback": "selfhst:folo",
	});
}

export default Component;
