import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqlv_3b2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqlv_3b2t"/>`,
		"fallback": "ps:girl-angel",
	});
}

export default Component;
