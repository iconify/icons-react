import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn_6ly9xj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn_6ly9xj"/>`,
		"fallback": "codicon:circuit-board",
	});
}

export default Component;
