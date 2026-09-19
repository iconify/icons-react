import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvuj97b5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wvuj97b5z"/>`,
		"fallback": "codicon:graph",
	});
}

export default Component;
