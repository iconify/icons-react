import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7g6zmbjt.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7g6zmbjt"/>`,
		"fallback": "wpf:2fswiperight",
	});
}

export default Component;
