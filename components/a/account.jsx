import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plt-c4b5w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plt-c4b5w"/>`,
		"fallback": "codicon:account",
	});
}

export default Component;
