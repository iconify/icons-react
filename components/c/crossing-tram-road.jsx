import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-xmnxb8z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-xmnxb8z"/>`,
		"fallback": "temaki:crossing-tram-road",
	});
}

export default Component;
