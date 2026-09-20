import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l09wnubxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l09wnubxs"/>`,
		"fallback": "tabler:folder-search",
	});
}

export default Component;
