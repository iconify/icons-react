import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e49if73uf.css';
import '../../css/e/emcb5offr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e49if73uf"/><path class="emcb5offr"/>`,
		"fallback": "energy-icons:ethernet-port-20-bold",
	});
}

export default Component;
