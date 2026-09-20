import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq1py1b7q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq1py1b7q"/>`,
		"fallback": "temaki:coffee",
	});
}

export default Component;
