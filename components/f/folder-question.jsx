import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwvo5fb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwvo5fb-i"/>`,
		"fallback": "uil:folder-question",
	});
}

export default Component;
