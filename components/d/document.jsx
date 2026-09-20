import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntog37p6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntog37p6f"/>`,
		"fallback": "reicon:document",
	});
}

export default Component;
