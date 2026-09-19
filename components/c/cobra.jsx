import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk5o4h72k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bk5o4h72k"/>`,
		"fallback": "griddy-icons:cobra",
	});
}

export default Component;
