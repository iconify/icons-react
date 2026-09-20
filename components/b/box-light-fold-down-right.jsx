import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e634_5b5n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e634_5b5n"/>`,
		"fallback": "memory:box-light-fold-down-right",
	});
}

export default Component;
