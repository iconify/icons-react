import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq26vi7tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq26vi7tp"/>`,
		"fallback": "tabler:haze-moon",
	});
}

export default Component;
