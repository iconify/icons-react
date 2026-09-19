import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v59xqacos.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v59xqacos"/>`,
		"fallback": "whh:fatarrowleft",
	});
}

export default Component;
