import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt_uxyb5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt_uxyb5d"/>`,
		"fallback": "cil:battery-slash",
	});
}

export default Component;
