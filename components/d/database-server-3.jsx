import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ce5bejr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ce5bejr"/>`,
		"fallback": "streamline-plump:database-server-3",
	});
}

export default Component;
