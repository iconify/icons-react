import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s80w6w7wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s80w6w7wg"/>`,
		"fallback": "mingcute:git-merge-line",
	});
}

export default Component;
