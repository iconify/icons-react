import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okkrs1paw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okkrs1paw"/>`,
		"fallback": "keyline-icons:book-x",
	});
}

export default Component;
