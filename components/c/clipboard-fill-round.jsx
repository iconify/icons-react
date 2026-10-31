import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpopvy77i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpopvy77i"/>`,
		"fallback": "coolicons:clipboard-fill-round",
	});
}

export default Component;
