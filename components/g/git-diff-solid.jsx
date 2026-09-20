import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtk4rcckz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtk4rcckz"/>`,
		"fallback": "mynaui:git-diff-solid",
	});
}

export default Component;
