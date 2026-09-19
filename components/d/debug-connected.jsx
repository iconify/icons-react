import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc0hp5z1k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc0hp5z1k"/>`,
		"fallback": "codicon:debug-connected",
	});
}

export default Component;
