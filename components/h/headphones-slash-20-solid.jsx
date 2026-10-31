import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px09f3oic.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="px09f3oic"/>`,
		"fallback": "sidekickicons:headphones-slash-20-solid",
	});
}

export default Component;
