import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pisil_48w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pisil_48w"/>`,
		"fallback": "streamline-plump:auto-flash",
	});
}

export default Component;
