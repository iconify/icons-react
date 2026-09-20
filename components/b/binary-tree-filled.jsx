import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3ft6c7gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3ft6c7gu"/>`,
		"fallback": "tabler:binary-tree-filled",
	});
}

export default Component;
