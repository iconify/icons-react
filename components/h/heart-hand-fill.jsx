import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbmndob-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbmndob-t"/>`,
		"fallback": "mingcute:heart-hand-fill",
	});
}

export default Component;
