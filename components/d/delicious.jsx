import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cim32vjet.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cim32vjet"/>`,
		"fallback": "zmdi:delicious",
	});
}

export default Component;
