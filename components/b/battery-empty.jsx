import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju2p32bfx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju2p32bfx"/>`,
		"fallback": "system-uicons:battery-empty",
	});
}

export default Component;
