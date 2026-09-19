import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clo7jz9rx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clo7jz9rx"/>`,
		"fallback": "icon-park-outline:boots",
	});
}

export default Component;
