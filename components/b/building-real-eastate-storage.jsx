import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf5t8vb8e.css';
import '../../css/o/ofn7d5bff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf5t8vb8e"/><path class="ofn7d5bff"/>`,
		"fallback": "streamline-pixel:building-real-eastate-storage",
	});
}

export default Component;
