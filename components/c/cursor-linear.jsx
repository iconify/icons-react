import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzy99uvdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzy99uvdc"/>`,
		"fallback": "solar:cursor-linear",
	});
}

export default Component;
