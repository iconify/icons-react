import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2496sf5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2496sf5e"/>`,
		"fallback": "streamline-plump:controller-1",
	});
}

export default Component;
