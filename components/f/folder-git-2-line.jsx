import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t30sd6bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t30sd6bta"/>`,
		"fallback": "mingcute:folder-git-2-line",
	});
}

export default Component;
