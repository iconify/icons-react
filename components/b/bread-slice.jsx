import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uab_dab1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uab_dab1h"/>`,
		"fallback": "fa6-solid:bread-slice",
	});
}

export default Component;
