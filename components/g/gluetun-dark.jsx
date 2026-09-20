import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh54a7btv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh54a7btv"/>`,
		"fallback": "selfhst:gluetun-dark",
	});
}

export default Component;
