import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx3kfoxkp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx3kfoxkp"/>`,
		"fallback": "teenyicons:file-tick-outline",
	});
}

export default Component;
