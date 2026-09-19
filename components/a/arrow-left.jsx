import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx7ghw7nd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx7ghw7nd"/>`,
		"fallback": "icon-park-outline:arrow-left",
	});
}

export default Component;
