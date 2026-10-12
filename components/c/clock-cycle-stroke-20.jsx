import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygkahxbsa.css';
import '../../css/e/e_i9g7bpu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygkahxbsa"/><path class="e_i9g7bpu"/>`,
		"fallback": "garden:clock-cycle-stroke-20",
	});
}

export default Component;
