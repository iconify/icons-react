import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzfljrblz.css';
import '../../css/s/saso1vbzu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzfljrblz"/><path class="saso1vbzu"/>`,
		"fallback": "cil:bell-exclamation",
	});
}

export default Component;
