import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-v9lvbyz.css';

const viewBox = {"width":563,"height":671};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-v9lvbyz"/>`,
		"fallback": "ls:a",
	});
}

export default Component;
