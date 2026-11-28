import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh9jewipe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh9jewipe"/>`,
		"fallback": "iconaut:folder-git-solid",
	});
}

export default Component;
