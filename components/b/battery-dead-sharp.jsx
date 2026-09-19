import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qge0pjb9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qge0pjb9t"/>`,
		"fallback": "famicons:battery-dead-sharp",
	});
}

export default Component;
