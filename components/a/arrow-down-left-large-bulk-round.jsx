import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3ye0t2rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3ye0t2rd"/>`,
		"fallback": "coolicons:arrow-down-left-large-bulk-round",
	});
}

export default Component;
