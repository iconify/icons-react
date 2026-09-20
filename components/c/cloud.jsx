import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvofh2j9i.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvofh2j9i"/>`,
		"fallback": "jam:cloud",
	});
}

export default Component;
