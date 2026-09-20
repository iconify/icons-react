import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0t5hu09k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0t5hu09k"/>`,
		"fallback": "selfhst:basic-memory-dark",
	});
}

export default Component;
