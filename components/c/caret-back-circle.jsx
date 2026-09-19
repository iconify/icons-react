import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_o-pw-1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_o-pw-1u"/>`,
		"fallback": "ion:caret-back-circle",
	});
}

export default Component;
