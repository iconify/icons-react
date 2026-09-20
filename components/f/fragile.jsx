import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8389p0ug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8389p0ug"/>`,
		"fallback": "streamline-plump:fragile",
	});
}

export default Component;
