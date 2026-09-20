import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuq_uun0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuq_uun0t"/>`,
		"fallback": "ri:airplay-fill",
	});
}

export default Component;
