import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldhnb-but.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldhnb-but"/>`,
		"fallback": "heroicons:code-bracket-square-16-solid",
	});
}

export default Component;
