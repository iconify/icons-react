import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3-ozqvzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3-ozqvzy"/>`,
		"fallback": "codicon:arrow-small-right",
	});
}

export default Component;
