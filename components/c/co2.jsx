import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e174snb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e174snb1s"/>`,
		"fallback": "cbi:co2",
	});
}

export default Component;
