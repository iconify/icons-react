import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doywix81z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doywix81z"/>`,
		"fallback": "meteor-icons:check-double",
	});
}

export default Component;
