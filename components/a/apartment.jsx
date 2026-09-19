import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph994hqiv.css';
import '../../css/f/fcg7ob6nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph994hqiv"/><path class="fcg7ob6nx"/>`,
		"fallback": "boxicons:apartment",
	});
}

export default Component;
