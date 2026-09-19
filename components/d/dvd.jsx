import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2y7jzbmz.css';
import '../../css/w/wu4cddcrq.css';
import '../../css/e/e8sy34j2t.css';
import '../../css/u/ulh87kb1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2y7jzbmz"/><path class="wu4cddcrq"/><path class="e8sy34j2t"/><path class="ulh87kb1h"/>`,
		"fallback": "fxemoji:dvd",
	});
}

export default Component;
