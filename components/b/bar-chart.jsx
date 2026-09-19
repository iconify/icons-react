import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9kryfb_n.css';
import '../../css/e/ed5g3xh8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9kryfb_n"/><path class="ed5g3xh8g"/>`,
		"fallback": "ion:bar-chart",
	});
}

export default Component;
