import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y42q0rb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y42q0rb-y"/>`,
		"fallback": "tabler:clock-hour-12",
	});
}

export default Component;
