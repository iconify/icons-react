import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czum-8bsq.css';
import '../../css/v/vk88lsh0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czum-8bsq duoicon-secondary-layer"/><path class="duoicon-primary-layer vk88lsh0q"/>`,
		"fallback": "duo-icons:bus",
	});
}

export default Component;
