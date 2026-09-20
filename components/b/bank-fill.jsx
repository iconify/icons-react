import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evt2zjc8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evt2zjc8h"/>`,
		"fallback": "ri:bank-fill",
	});
}

export default Component;
