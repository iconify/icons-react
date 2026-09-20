import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_kutkb3w.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_kutkb3w"/>`,
		"fallback": "medical-icon:hearing-assistance",
	});
}

export default Component;
