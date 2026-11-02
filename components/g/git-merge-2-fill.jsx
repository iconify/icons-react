import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-be48n4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-be48n4b"/>`,
		"fallback": "mingcute:git-merge-2-fill",
	});
}

export default Component;
