import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8b0e2b-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8b0e2b-w"/>`,
		"fallback": "ion:code-slash-sharp",
	});
}

export default Component;
