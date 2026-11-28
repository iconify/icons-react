import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n13t0cbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n13t0cbwe"/>`,
		"fallback": "noviair-light:clipboard",
	});
}

export default Component;
