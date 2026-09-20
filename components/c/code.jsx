import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z59r8p4po.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z59r8p4po"/>`,
		"fallback": "system-uicons:code",
	});
}

export default Component;
