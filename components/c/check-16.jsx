import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkmo_cb_o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkmo_cb_o"/>`,
		"fallback": "octicon:check-16",
	});
}

export default Component;
