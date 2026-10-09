import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-a_50ber.css';
import '../../css/r/r5y-twbvw.css';
import '../../css/e/e8e0uwbbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-a_50ber"/><path class="r5y-twbvw"/><path class="e8e0uwbbo"/>`,
		"fallback": "energy-icons:cooking-pot-20-bold",
	});
}

export default Component;
