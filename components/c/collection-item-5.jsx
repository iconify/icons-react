import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e54zhh65x.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e54zhh65x"/>`,
		"fallback": "zmdi:collection-item-5",
	});
}

export default Component;
