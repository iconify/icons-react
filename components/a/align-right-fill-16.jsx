import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu6h595dw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu6h595dw"/>`,
		"fallback": "garden:align-right-fill-16",
	});
}

export default Component;
