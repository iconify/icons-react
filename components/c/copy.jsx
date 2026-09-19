import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b41hdtb8m.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b41hdtb8m"/>`,
		"fallback": "whh:copy",
	});
}

export default Component;
