import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5_pm9b3h.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5_pm9b3h"/>`,
		"fallback": "zmdi:collection-item-9-plus",
	});
}

export default Component;
