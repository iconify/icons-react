import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re3f74b-n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re3f74b-n"/>`,
		"fallback": "memory:arrow-down",
	});
}

export default Component;
