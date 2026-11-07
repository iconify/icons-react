import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcid6acgw.css';
import '../../css/g/g-fa1j-ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcid6acgw"/><path class="g-fa1j-ay"/>`,
		"fallback": "solar:bookmark-square-minimalistic-bold-duotone",
	});
}

export default Component;
