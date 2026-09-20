import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwckj7bep.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwckj7bep"/>`,
		"fallback": "selfhst:dex-auth-light",
	});
}

export default Component;
