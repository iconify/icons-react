import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujwr_lkax.css';
import '../../css/c/c7cgn4zwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujwr_lkax"/><path class="c7cgn4zwd"/>`,
		"fallback": "stash:cloud-arrow-up",
	});
}

export default Component;
