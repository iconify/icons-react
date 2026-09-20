import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dss7b2x8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dss7b2x8z"/>`,
		"fallback": "streamline-plump:book-1-solid",
	});
}

export default Component;
