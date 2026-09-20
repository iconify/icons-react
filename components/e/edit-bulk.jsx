import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hem1vcbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hem1vcbwm"/>`,
		"fallback": "tabler:edit-bulk",
	});
}

export default Component;
