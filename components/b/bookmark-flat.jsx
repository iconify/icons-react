import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5ufmmb1s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5ufmmb1s"/>`,
		"fallback": "streamline-color:bookmark-flat",
	});
}

export default Component;
