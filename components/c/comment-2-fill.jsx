import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr1a8xbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr1a8xbby"/>`,
		"fallback": "mingcute:comment-2-fill",
	});
}

export default Component;
