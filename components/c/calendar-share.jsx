import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk3x2jjys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk3x2jjys"/>`,
		"fallback": "tabler:calendar-share",
	});
}

export default Component;
