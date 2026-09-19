import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_k0mzjpd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_k0mzjpd"/>`,
		"fallback": "codicon:copilot-dot",
	});
}

export default Component;
