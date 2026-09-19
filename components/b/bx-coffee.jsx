import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bebt1abvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bebt1abvj"/>`,
		"fallback": "bx:bx-coffee",
	});
}

export default Component;
