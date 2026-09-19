import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_o7fzbsh.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_o7fzbsh"/>`,
		"fallback": "topcoat:call",
	});
}

export default Component;
