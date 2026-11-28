import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax5h1hb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax5h1hb0g"/>`,
		"fallback": "noviair-light:clipboard-list-info",
	});
}

export default Component;
