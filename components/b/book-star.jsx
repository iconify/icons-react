import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl67g7b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl67g7b5e"/>`,
		"fallback": "noviair:book-star",
	});
}

export default Component;
