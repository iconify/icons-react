import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtvtce9_v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtvtce9_v"/>`,
		"fallback": "octicon:chevron-left-12",
	});
}

export default Component;
