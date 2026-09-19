import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xageqtutm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xageqtutm"/>`,
		"fallback": "bx:bx-git-commit",
	});
}

export default Component;
