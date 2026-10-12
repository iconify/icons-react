import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyt5vk0em.css';
import '../../css/a/aj1kvdbma.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyt5vk0em"/><path class="aj1kvdbma"/>`,
		"fallback": "garden:alt-text-fill-20",
	});
}

export default Component;
