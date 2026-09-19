import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnubl6byi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnubl6byi"/>`,
		"fallback": "codicon:add-compact",
	});
}

export default Component;
