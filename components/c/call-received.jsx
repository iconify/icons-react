import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlu5le0mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlu5le0mt"/>`,
		"fallback": "mdi:call-received",
	});
}

export default Component;
