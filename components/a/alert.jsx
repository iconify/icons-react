import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_wv08buy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_wv08buy"/>`,
		"fallback": "memory:alert",
	});
}

export default Component;
