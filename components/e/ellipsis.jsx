import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x55li5b5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x55li5b5o"/>`,
		"fallback": "nimbus:ellipsis",
	});
}

export default Component;
