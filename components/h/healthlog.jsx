import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nue79bcyt.css';
import '../../css/k/k237ps8_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nue79bcyt"/><path class="k237ps8_d"/>`,
		"fallback": "selfhst:healthlog",
	});
}

export default Component;
