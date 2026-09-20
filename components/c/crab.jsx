import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfa1bh-8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfa1bh-8w"/>`,
		"fallback": "token:crab",
	});
}

export default Component;
