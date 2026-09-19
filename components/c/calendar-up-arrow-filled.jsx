import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2tt35wje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2tt35wje"/>`,
		"fallback": "boxicons:calendar-up-arrow-filled",
	});
}

export default Component;
