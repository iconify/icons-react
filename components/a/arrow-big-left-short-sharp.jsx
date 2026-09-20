import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wngzm_bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wngzm_bna"/>`,
		"fallback": "keyline-icons:arrow-big-left-short-sharp",
	});
}

export default Component;
