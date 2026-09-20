import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw6t0ac1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw6t0ac1g"/>`,
		"fallback": "mynaui:asterisk-octagon-solid",
	});
}

export default Component;
