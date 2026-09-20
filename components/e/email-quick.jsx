import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbo5by-jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbo5by-jd"/>`,
		"fallback": "mdi:email-quick",
	});
}

export default Component;
