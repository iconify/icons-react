import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgwhj2-nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bgwhj2-nq"/>`,
		"fallback": "solar:history-outline",
	});
}

export default Component;
