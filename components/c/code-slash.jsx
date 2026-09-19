import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm61msbzc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm61msbzc"/>`,
		"fallback": "bi:code-slash",
	});
}

export default Component;
