import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqpfuvb4h.css';
import '../../css/r/r5oe02zhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqpfuvb4h"/><path class="r5oe02zhf"/>`,
		"fallback": "streamline-freehand:business-product-supplier-2",
	});
}

export default Component;
