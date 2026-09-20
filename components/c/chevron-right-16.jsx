import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3ji_6bpi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3ji_6bpi"/>`,
		"fallback": "octicon:chevron-right-16",
	});
}

export default Component;
