import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-p6gpbin.css';
import '../../css/d/dnun0_bjo.css';
import '../../css/m/mldtn5bcy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-p6gpbin"/><path class="dnun0_bjo"/><path class="mldtn5bcy"/>`,
		"fallback": "energy-icons:delete-20-bold",
	});
}

export default Component;
