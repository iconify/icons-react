import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxj7r4rhc.css';
import '../../css/x/x9cx8dvbi.css';
import '../../css/u/usalp6zbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxj7r4rhc"/><path class="x9cx8dvbi"/><path class="usalp6zbm"/>`,
		"fallback": "fxemoji:candy",
	});
}

export default Component;
