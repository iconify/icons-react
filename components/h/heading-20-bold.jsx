import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-vsuachh.css';
import '../../css/a/at10t5btg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-vsuachh"/><path class="at10t5btg"/>`,
		"fallback": "energy-icons:heading-20-bold",
	});
}

export default Component;
