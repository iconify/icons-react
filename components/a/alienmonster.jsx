import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0eo731hg.css';
import '../../css/m/mwt8libml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0eo731hg"/><path class="mwt8libml"/>`,
		"fallback": "fxemoji:alienmonster",
	});
}

export default Component;
