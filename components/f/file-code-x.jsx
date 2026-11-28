import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0cw-wb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0cw-wb4a"/>`,
		"fallback": "noviair-light:file-code-x",
	});
}

export default Component;
