import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujwr_lkax.css';
import '../../css/d/dr-g6zfdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujwr_lkax"/><path class="dr-g6zfdf"/>`,
		"fallback": "stash:cloud-arrow-up-duotone",
	});
}

export default Component;
