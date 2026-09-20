import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxy9z3b8n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxy9z3b8n"/>`,
		"fallback": "picon:calc",
	});
}

export default Component;
