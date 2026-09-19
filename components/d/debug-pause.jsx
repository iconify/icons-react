import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlb28h91q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlb28h91q"/>`,
		"fallback": "codicon:debug-pause",
	});
}

export default Component;
