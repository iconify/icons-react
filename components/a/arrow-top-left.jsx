import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/con_4y89t.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="con_4y89t"/>`,
		"fallback": "memory:arrow-top-left",
	});
}

export default Component;
