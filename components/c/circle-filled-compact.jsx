import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfbl99j8q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfbl99j8q"/>`,
		"fallback": "codicon:circle-filled-compact",
	});
}

export default Component;
