import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s401l6b9o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s401l6b9o"/>`,
		"fallback": "lsicon:export-outline",
	});
}

export default Component;
