import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abl16db3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abl16db3a"/>`,
		"fallback": "lets-icons:comment-fill",
	});
}

export default Component;
