import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_20abpwf.css';
import '../../css/m/m01ydll8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_20abpwf"/><path class="m01ydll8v"/>`,
		"fallback": "selfhst:domain-locker-light",
	});
}

export default Component;
