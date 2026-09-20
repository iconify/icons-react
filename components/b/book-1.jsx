import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc7vbnb-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc7vbnb-z"/>`,
		"fallback": "streamline-plump:book-1",
	});
}

export default Component;
