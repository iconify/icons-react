import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxt_cybsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxt_cybsm"/>`,
		"fallback": "codicon:color-mode",
	});
}

export default Component;
