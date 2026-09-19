import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfj5y64ox.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfj5y64ox"/>`,
		"fallback": "carbon:emissions-management",
	});
}

export default Component;
