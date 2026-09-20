import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb_-dwb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb_-dwb0a"/>`,
		"fallback": "ri:delete-bin-7-line",
	});
}

export default Component;
