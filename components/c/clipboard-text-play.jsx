import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo4ugdb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo4ugdb-x"/>`,
		"fallback": "mdi:clipboard-text-play",
	});
}

export default Component;
