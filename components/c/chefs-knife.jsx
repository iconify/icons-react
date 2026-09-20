import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhneexb4p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhneexb4p"/>`,
		"fallback": "temaki:chefs-knife",
	});
}

export default Component;
