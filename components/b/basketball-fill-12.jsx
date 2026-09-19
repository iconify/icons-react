import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re52c97vh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re52c97vh"/>`,
		"fallback": "garden:basketball-fill-12",
	});
}

export default Component;
