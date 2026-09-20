import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlo9x92kx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlo9x92kx"/>`,
		"fallback": "vaadin:gamepad",
	});
}

export default Component;
