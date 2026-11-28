import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyup4eb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyup4eb3f"/>`,
		"fallback": "iconaut:git-merge-solid",
	});
}

export default Component;
