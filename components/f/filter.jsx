import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmk5e-bns.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmk5e-bns"/>`,
		"fallback": "codicon:filter",
	});
}

export default Component;
