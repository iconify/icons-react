import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temj2-uou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="temj2-uou"/>`,
		"fallback": "noviair-light:git-branch-check",
	});
}

export default Component;
