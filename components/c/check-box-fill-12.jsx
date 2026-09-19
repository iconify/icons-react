import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3sd78bxi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3sd78bxi"/>`,
		"fallback": "garden:check-box-fill-12",
	});
}

export default Component;
