import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0c4xobxi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0c4xobxi"/>`,
		"fallback": "gis:earth-asia-o",
	});
}

export default Component;
