import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is0rpl3ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is0rpl3ey"/>`,
		"fallback": "token:hermes",
	});
}

export default Component;
