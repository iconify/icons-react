import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhgf2cphm.css';
import '../../css/h/h_f86fbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhgf2cphm"/><path class="h_f86fbgy"/>`,
		"fallback": "selfhst:chhoto-url-light",
	});
}

export default Component;
