import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8851xbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8851xbax"/>`,
		"fallback": "ci:caret-right-sm",
	});
}

export default Component;
