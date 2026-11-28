import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn9-em49e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn9-em49e"/>`,
		"fallback": "iconaut:git-branch-check-solid",
	});
}

export default Component;
