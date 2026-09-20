import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwenqib1r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwenqib1r"/>`,
		"fallback": "octicon:feed-merged-16",
	});
}

export default Component;
