import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ggubrob9u.css';
import '../../css/v/viwwy8bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ggubrob9u"/><path class="viwwy8bui"/></g>`,
		"fallback": "hugeicons:folder-music",
	});
}

export default Component;
