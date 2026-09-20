import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or_3ngbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or_3ngbku"/>`,
		"fallback": "mdi:engine-outline",
	});
}

export default Component;
