import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxu3tabzs.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxu3tabzs"/>`,
		"fallback": "fa6-solid:filter-circle-xmark",
	});
}

export default Component;
