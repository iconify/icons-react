import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muu8gqd7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muu8gqd7d"/>`,
		"fallback": "mdi:insert-invitation",
	});
}

export default Component;
