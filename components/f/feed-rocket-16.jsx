import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9crslb7d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9crslb7d"/>`,
		"fallback": "octicon:feed-rocket-16",
	});
}

export default Component;
