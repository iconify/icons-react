import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx7o6jbbt.css';
import '../../css/k/kzp9xht2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx7o6jbbt"/><path class="kzp9xht2i"/>`,
		"fallback": "streamline-pixel:food-drink-desert-donut",
	});
}

export default Component;
