import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khgv06bhg.css';
import '../../css/e/eb9nnbb2q.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 khgv06bhg"/><path class="clr-i-outline clr-i-outline-path-2 eb9nnbb2q"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:block-quote-line",
	});
}

export default Component;
