import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u96dugbci.css';
import '../../css/j/j-o7--b0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="u96dugbci"/><path class="j-o7--b0o"/>`,
		"fallback": "ion:battery-dead",
	});
}

export default Component;
