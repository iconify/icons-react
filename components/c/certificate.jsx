import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdcvev7wr.css';
import '../../css/f/fbeas_klm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdcvev7wr duoicon-primary-layer"/><path class="duoicon-secondary-layer fbeas_klm"/>`,
		"fallback": "duo-icons:certificate",
	});
}

export default Component;
