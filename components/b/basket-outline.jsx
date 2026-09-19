import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2g2swbim.css';
import '../../css/f/f471phb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2g2swbim"/><path class="f471phb4s"/>`,
		"fallback": "ion:basket-outline",
	});
}

export default Component;
