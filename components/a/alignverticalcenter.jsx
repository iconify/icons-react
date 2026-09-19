import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b90k02bgt.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b90k02bgt"/>`,
		"fallback": "whh:alignverticalcenter",
	});
}

export default Component;
