import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uly7bsagg.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uly7bsagg"/>`,
		"fallback": "zmdi:bookmark-outline",
	});
}

export default Component;
