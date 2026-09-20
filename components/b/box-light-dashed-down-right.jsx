import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2q536p7h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2q536p7h"/>`,
		"fallback": "memory:box-light-dashed-down-right",
	});
}

export default Component;
