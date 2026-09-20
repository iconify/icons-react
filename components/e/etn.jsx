import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ct9jb7j.css';
import '../../css/f/f77eelu2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ct9jb7j"/><path class="f77eelu2w"/>`,
		"fallback": "token:etn",
	});
}

export default Component;
