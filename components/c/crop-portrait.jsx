import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtud8ramv.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtud8ramv"/>`,
		"fallback": "zmdi:crop-portrait",
	});
}

export default Component;
