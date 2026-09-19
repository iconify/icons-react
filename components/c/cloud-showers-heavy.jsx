import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw-xedbhm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw-xedbhm"/>`,
		"fallback": "fa6-solid:cloud-showers-heavy",
	});
}

export default Component;
