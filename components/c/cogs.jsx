import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1oqwq31l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1oqwq31l"/>`,
		"fallback": "fa7-solid:cogs",
	});
}

export default Component;
