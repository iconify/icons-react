import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnr2p2b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnr2p2b_r"/>`,
		"fallback": "ri:folder-image-line",
	});
}

export default Component;
