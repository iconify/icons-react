import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjib77b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjib77b2v"/>`,
		"fallback": "tabler:circle-letter-x",
	});
}

export default Component;
