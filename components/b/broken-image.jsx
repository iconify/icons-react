import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no54uea3f.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no54uea3f"/>`,
		"fallback": "zmdi:broken-image",
	});
}

export default Component;
