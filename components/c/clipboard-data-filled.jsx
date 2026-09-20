import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqy47e33q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqy47e33q"/>`,
		"fallback": "tabler:clipboard-data-filled",
	});
}

export default Component;
