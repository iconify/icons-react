import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihvzegruc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihvzegruc"/>`,
		"fallback": "mingcute:git-branch-line",
	});
}

export default Component;
