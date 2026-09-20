import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgsi59b4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgsi59b4w"/>`,
		"fallback": "streamline:filter-2",
	});
}

export default Component;
