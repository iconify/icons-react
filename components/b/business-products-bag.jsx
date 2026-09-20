import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dluyn9c8v.css';
import '../../css/g/gj051ober.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dluyn9c8v"/><path class="gj051ober"/>`,
		"fallback": "streamline-pixel:business-products-bag",
	});
}

export default Component;
