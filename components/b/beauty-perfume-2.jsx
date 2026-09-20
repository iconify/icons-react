import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c73ylccim.css';
import '../../css/p/pozja0bej.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c73ylccim"/><path class="pozja0bej"/>`,
		"fallback": "streamline-pixel:beauty-perfume-2",
	});
}

export default Component;
