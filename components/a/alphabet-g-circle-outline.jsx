import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/git3lrbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="git3lrbaz"/>`,
		"fallback": "mdi:alphabet-g-circle-outline",
	});
}

export default Component;
