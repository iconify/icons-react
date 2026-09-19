import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s26cq-8xl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s26cq-8xl"/>`,
		"fallback": "fa-solid:dumpster-fire",
	});
}

export default Component;
