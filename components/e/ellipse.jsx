import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcwutrxfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="kcwutrxfr"/>`,
		"fallback": "hugeicons:ellipse",
	});
}

export default Component;
