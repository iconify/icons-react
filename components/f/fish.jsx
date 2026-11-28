import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rszk1ccdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rszk1ccdp"/>`,
		"fallback": "noviair-light:fish",
	});
}

export default Component;
