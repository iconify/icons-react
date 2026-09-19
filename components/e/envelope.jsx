import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtqmscb8b.css';
import '../../css/y/yujr8pbfe.css';
import '../../css/j/jpvlp2bch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtqmscb8b"/><path class="yujr8pbfe"/><path class="jpvlp2bch"/>`,
		"fallback": "fxemoji:envelope",
	});
}

export default Component;
