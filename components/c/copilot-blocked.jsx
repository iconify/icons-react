import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-ako4bre.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-ako4bre"/>`,
		"fallback": "codicon:copilot-blocked",
	});
}

export default Component;
