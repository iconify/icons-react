import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg79mza6p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg79mza6p"/>`,
		"fallback": "memory:check",
	});
}

export default Component;
