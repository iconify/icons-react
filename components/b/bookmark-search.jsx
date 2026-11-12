import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af1s617xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af1s617xg"/>`,
		"fallback": "tabler:bookmark-search",
	});
}

export default Component;
