import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8bf1t8kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8bf1t8kc"/>`,
		"fallback": "mage:gem-a-fill",
	});
}

export default Component;
