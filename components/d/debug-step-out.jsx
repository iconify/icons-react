import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib6l7jmqa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib6l7jmqa"/>`,
		"fallback": "codicon:debug-step-out",
	});
}

export default Component;
