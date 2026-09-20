import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sim1-4btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sim1-4btd"/>`,
		"fallback": "ri:battery-2-line",
	});
}

export default Component;
