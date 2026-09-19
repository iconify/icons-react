import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp-oc4b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp-oc4b9a"/>`,
		"fallback": "circum:align-right",
	});
}

export default Component;
