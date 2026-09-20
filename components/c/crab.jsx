import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brm-ghxcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brm-ghxcb"/>`,
		"fallback": "meteor-icons:crab",
	});
}

export default Component;
