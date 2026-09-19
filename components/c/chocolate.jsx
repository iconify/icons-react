import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs-0on4wy.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs-0on4wy"/>`,
		"fallback": "whh:chocolate",
	});
}

export default Component;
