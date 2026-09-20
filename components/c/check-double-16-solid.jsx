import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0a7_rbgr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0a7_rbgr"/>`,
		"fallback": "sidekickicons:check-double-16-solid",
	});
}

export default Component;
