import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4s7ccb7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4s7ccb7g"/>`,
		"fallback": "icon-park-outline:comment",
	});
}

export default Component;
