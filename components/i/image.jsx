import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdw6n2bba.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdw6n2bba"/>`,
		"fallback": "whh:image",
	});
}

export default Component;
