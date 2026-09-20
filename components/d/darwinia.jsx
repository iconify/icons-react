import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1fzc2bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1fzc2bsc"/>`,
		"fallback": "token:darwinia",
	});
}

export default Component;
