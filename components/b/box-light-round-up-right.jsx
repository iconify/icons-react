import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvs2y_6ct.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvs2y_6ct"/>`,
		"fallback": "memory:box-light-round-up-right",
	});
}

export default Component;
