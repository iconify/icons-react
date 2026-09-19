import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msau2_b3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msau2_b3q"/>`,
		"fallback": "bi:collection",
	});
}

export default Component;
