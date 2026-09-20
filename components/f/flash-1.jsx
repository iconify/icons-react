import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ung_ne2kj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ung_ne2kj"/>`,
		"fallback": "streamline-plump:flash-1",
	});
}

export default Component;
