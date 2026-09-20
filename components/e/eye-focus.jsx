import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxn_07btl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxn_07btl"/>`,
		"fallback": "ix:eye-focus",
	});
}

export default Component;
