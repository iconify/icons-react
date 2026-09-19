import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uszyinm-l.css';
import '../../css/e/evom4wbsm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uszyinm-l"/><path class="evom4wbsm"/>`,
		"fallback": "carbon:filter-reset",
	});
}

export default Component;
