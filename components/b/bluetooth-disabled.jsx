import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etars_b6k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etars_b6k"/>`,
		"fallback": "streamline-color:bluetooth-disabled",
	});
}

export default Component;
