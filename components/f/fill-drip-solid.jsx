import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc5gbb7ex.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc5gbb7ex"/>`,
		"fallback": "la:fill-drip-solid",
	});
}

export default Component;
