import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bplaobd3f.css';
import '../../css/x/x7qp0hbws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bplaobd3f"/><path class="x7qp0hbws"/>`,
		"fallback": "streamline-pixel:business-product-price-tag",
	});
}

export default Component;
