import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh0qs-btc.css';
import '../../css/d/dgnjy1a4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="lh0qs-btc"/><path class="dgnjy1a4g"/>`,
		"fallback": "famicons:easel-outline",
	});
}

export default Component;
