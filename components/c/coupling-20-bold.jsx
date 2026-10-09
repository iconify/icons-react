import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iplcxaclv.css';
import '../../css/o/oqts9w9jb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iplcxaclv"/><path class="oqts9w9jb"/>`,
		"fallback": "energy-icons:coupling-20-bold",
	});
}

export default Component;
