import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgbva3b1a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgbva3b1a"/>`,
		"fallback": "picon:fridge",
	});
}

export default Component;
