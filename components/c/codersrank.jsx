import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t91dm2pkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t91dm2pkn"/>`,
		"fallback": "thesvg-color:codersrank",
	});
}

export default Component;
