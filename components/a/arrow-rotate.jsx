import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y27aw59rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y27aw59rn"/>`,
		"fallback": "meteor-icons:arrow-rotate",
	});
}

export default Component;
