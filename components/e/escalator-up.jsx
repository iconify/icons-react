import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvw_5zbab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvw_5zbab"/>`,
		"fallback": "streamline-plump:escalator-up",
	});
}

export default Component;
