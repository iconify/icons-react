import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb7nfkbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb7nfkbrq"/>`,
		"fallback": "mingcute:image-play-fill",
	});
}

export default Component;
