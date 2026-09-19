import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_v9fab4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_v9fab4h"/>`,
		"fallback": "codicon:arrow-swap",
	});
}

export default Component;
