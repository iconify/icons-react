import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grm9sdwah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grm9sdwah"/>`,
		"fallback": "tabler:clock-hour-11",
	});
}

export default Component;
