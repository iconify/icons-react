import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc46xob6r.css';
import '../../css/i/ilhwmcbcr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc46xob6r"/><path class="ilhwmcbcr"/>`,
		"fallback": "carbon:direction-bear-right-01-filled",
	});
}

export default Component;
