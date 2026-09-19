import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohv39gr8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohv39gr8k"/>`,
		"fallback": "hugeicons:circle-arrow-out-down-left",
	});
}

export default Component;
