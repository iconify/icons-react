import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqdl70b_g.css';
import '../../css/s/st9n28bpc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqdl70b_g"/><path class="st9n28bpc"/>`,
		"fallback": "energy-icons:fridge-20",
	});
}

export default Component;
