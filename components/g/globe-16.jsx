import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plpghf1-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plpghf1-m"/>`,
		"fallback": "octicon:globe-16",
	});
}

export default Component;
