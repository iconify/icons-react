import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qypm3zu-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qypm3zu-k"/>`,
		"fallback": "heroicons:arrow-turn-right-down-solid",
	});
}

export default Component;
