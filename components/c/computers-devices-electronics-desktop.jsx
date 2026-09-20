import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3e1967if.css';
import '../../css/f/f9s06tb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3e1967if"/><path class="f9s06tb4u"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-desktop",
	});
}

export default Component;
