import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byamri8or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byamri8or"/>`,
		"fallback": "noviair:bookmark-x",
	});
}

export default Component;
