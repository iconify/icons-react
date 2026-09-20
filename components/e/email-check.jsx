import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7no0b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li7no0b4a"/>`,
		"fallback": "mdi:email-check",
	});
}

export default Component;
