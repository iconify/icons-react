import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyvt1zbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyvt1zbeh"/>`,
		"fallback": "cbi:bulbs-filament",
	});
}

export default Component;
