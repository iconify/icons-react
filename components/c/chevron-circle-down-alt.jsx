import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb6wl9bmp.css';
import '../../css/j/jm1-sfbtc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb6wl9bmp"/><path class="jm1-sfbtc"/>`,
		"fallback": "cil:chevron-circle-down-alt",
	});
}

export default Component;
