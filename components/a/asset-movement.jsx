import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os7ez2btm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os7ez2btm"/>`,
		"fallback": "carbon:asset-movement",
	});
}

export default Component;
