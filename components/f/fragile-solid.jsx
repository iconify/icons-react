import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6gk6tkiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6gk6tkiy"/>`,
		"fallback": "streamline-plump:fragile-solid",
	});
}

export default Component;
