import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alyf4_bkr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alyf4_bkr"/>`,
		"fallback": "codicon:bell-slash-dot",
	});
}

export default Component;
