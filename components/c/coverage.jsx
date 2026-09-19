import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcefh-p8e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcefh-p8e"/>`,
		"fallback": "codicon:coverage",
	});
}

export default Component;
