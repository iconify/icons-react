import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdf6hiznz.css';
import '../../css/v/vnfkbkbvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdf6hiznz"/><path class="vnfkbkbvd"/>`,
		"fallback": "famicons:diamond-outline",
	});
}

export default Component;
