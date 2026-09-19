import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp8lvw4jf.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp8lvw4jf"/>`,
		"fallback": "whh:googledrive",
	});
}

export default Component;
