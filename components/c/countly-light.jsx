import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn39y8buz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn39y8buz"/>`,
		"fallback": "selfhst:countly-light",
	});
}

export default Component;
