import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvr3t2bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvr3t2bex"/>`,
		"fallback": "coolicons:armchair-round",
	});
}

export default Component;
