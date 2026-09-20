import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy9ooh44h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy9ooh44h"/>`,
		"fallback": "streamline-sharp:graph-arrow-user-increase",
	});
}

export default Component;
