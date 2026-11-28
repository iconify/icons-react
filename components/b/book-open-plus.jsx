import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmzuekb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmzuekb3m"/>`,
		"fallback": "noviair:book-open-plus",
	});
}

export default Component;
