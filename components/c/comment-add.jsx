import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp28u69ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp28u69ws"/>`,
		"fallback": "uil:comment-add",
	});
}

export default Component;
