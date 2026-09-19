import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3tjkyblx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3tjkyblx"/>`,
		"fallback": "codicon:fish1-sad",
	});
}

export default Component;
