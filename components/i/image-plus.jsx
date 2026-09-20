import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4j-itpzn.css';
import '../../css/w/wch9wu0eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4j-itpzn"/><path class="wch9wu0eu"/>`,
		"fallback": "stash:image-plus",
	});
}

export default Component;
