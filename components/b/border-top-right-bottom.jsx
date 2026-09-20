import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkte9o6es.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkte9o6es"/>`,
		"fallback": "memory:border-top-right-bottom",
	});
}

export default Component;
