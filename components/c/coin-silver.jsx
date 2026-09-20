import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvn9to28b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvn9to28b"/>`,
		"fallback": "memory:coin-silver",
	});
}

export default Component;
