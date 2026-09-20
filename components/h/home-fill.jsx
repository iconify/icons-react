import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b73qsnz7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b73qsnz7i"/>`,
		"fallback": "keyline-icons:home-fill",
	});
}

export default Component;
