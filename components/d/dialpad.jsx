import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkepnv0au.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkepnv0au"/>`,
		"fallback": "zmdi:dialpad",
	});
}

export default Component;
