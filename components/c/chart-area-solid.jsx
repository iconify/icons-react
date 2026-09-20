import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5m8x1bgo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5m8x1bgo"/>`,
		"fallback": "la:chart-area-solid",
	});
}

export default Component;
