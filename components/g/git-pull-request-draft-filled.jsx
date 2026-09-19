import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5racc8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5racc8s"/>`,
		"fallback": "boxicons:git-pull-request-draft-filled",
	});
}

export default Component;
