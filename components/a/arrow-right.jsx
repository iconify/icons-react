import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/y/y5vv9ubra.css';
import '../../css/b/b922yzmjq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="y5vv9ubra"/><path class="b922yzmjq"/>`,
		"fallback": "ei:arrow-right",
	});
}

export default Component;
