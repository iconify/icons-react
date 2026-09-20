import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci7_qzgce.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci7_qzgce"/>`,
		"fallback": "pinhead:cargobike-and-locked-lock-with-keyhole",
	});
}

export default Component;
