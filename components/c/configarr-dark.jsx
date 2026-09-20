import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip70a665c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip70a665c"/>`,
		"fallback": "selfhst:configarr-dark",
	});
}

export default Component;
