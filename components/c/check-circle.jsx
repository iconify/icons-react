import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbh8_acgb.css';
import '../../css/g/gd6ueob5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbh8_acgb"/><path class="gd6ueob5v"/>`,
		"fallback": "cil:check-circle",
	});
}

export default Component;
