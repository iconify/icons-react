import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puwug5bgg.css';
import '../../css/h/ht9cs5buy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puwug5bgg"/><path class="ht9cs5buy"/>`,
		"fallback": "selfhst:audiodeck",
	});
}

export default Component;
