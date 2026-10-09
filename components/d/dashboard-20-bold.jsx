import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bti2zsyuz.css';
import '../../css/h/hzelccctm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bti2zsyuz"/><path class="hzelccctm"/>`,
		"fallback": "energy-icons:dashboard-20-bold",
	});
}

export default Component;
