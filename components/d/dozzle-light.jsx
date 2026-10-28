import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtw5n0crk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtw5n0crk"/>`,
		"fallback": "selfhst:dozzle-light",
	});
}

export default Component;
