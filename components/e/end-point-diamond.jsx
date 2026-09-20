import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-cybfbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-cybfbrs"/>`,
		"fallback": "streamline-plump:end-point-diamond",
	});
}

export default Component;
