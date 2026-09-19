import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkafytb6h.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkafytb6h"/>`,
		"fallback": "zmdi:collection-item-9",
	});
}

export default Component;
