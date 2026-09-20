import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8rewko4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8rewko4t"/>`,
		"fallback": "meteor-icons:forward",
	});
}

export default Component;
