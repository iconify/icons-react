import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eers39bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eers39bej"/>`,
		"fallback": "hugeicons:angle",
	});
}

export default Component;
