import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc4as8vip.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc4as8vip"/>`,
		"fallback": "jam:first-aid-f",
	});
}

export default Component;
