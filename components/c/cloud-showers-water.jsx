import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9ab8rbfo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9ab8rbfo"/>`,
		"fallback": "fa7-solid:cloud-showers-water",
	});
}

export default Component;
