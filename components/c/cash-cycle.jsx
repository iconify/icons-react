import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr9ril5is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr9ril5is"/>`,
		"fallback": "mdi:cash-cycle",
	});
}

export default Component;
