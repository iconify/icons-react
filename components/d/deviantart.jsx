import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5grh9b8d.css';

const viewBox = {"width":1024,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5grh9b8d"/>`,
		"fallback": "fa:deviantart",
	});
}

export default Component;
