import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evtnbubdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="evtnbubdj"/>`,
		"fallback": "streamline-plump:discount-percent-cutout-remix",
	});
}

export default Component;
