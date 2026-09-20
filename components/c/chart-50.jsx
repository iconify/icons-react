import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j81z2yx1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j81z2yx1l"/>`,
		"fallback": "mage:chart-50",
	});
}

export default Component;
