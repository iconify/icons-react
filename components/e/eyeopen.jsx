import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze0k2yv1l.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze0k2yv1l"/>`,
		"fallback": "whh:eyeopen",
	});
}

export default Component;
