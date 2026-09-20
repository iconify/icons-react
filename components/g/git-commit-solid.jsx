import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dko7ahb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dko7ahb2d"/>`,
		"fallback": "mynaui:git-commit-solid",
	});
}

export default Component;
