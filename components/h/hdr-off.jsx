import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atz9pabfh.css';

const viewBox = {"width":432,"height":440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atz9pabfh"/>`,
		"fallback": "zmdi:hdr-off",
	});
}

export default Component;
