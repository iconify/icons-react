import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb0dbsb7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb0dbsb7k"/>`,
		"fallback": "temaki:balance-beam",
	});
}

export default Component;
