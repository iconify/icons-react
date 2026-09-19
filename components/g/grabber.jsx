import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mweid1b7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mweid1b7w"/>`,
		"fallback": "codicon:grabber",
	});
}

export default Component;
