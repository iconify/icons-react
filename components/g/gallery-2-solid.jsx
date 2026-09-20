import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7rr8ab4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x7rr8ab4u"/>`,
		"fallback": "streamline-plump:gallery-2-solid",
	});
}

export default Component;
