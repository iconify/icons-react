import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu1ylqbqi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu1ylqbqi"/>`,
		"fallback": "dashicons:editor-strikethrough",
	});
}

export default Component;
