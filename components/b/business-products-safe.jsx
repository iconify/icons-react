import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7ruo7b3n.css';
import '../../css/z/zpnwaj4vm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7ruo7b3n"/><path class="zpnwaj4vm"/>`,
		"fallback": "streamline-pixel:business-products-safe",
	});
}

export default Component;
