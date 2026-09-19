import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljlho-brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljlho-brn"/>`,
		"fallback": "heroicons:arrow-turn-down-left",
	});
}

export default Component;
