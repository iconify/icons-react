import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqk9lqbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqk9lqbnm"/>`,
		"fallback": "keyline-icons:check-sharp-fill",
	});
}

export default Component;
