import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3_xu5-hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3_xu5-hc"/>`,
		"fallback": "mdi:call-merge",
	});
}

export default Component;
