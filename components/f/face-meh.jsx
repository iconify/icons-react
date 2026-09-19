import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fytkei63w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fytkei63w"/>`,
		"fallback": "fa6-regular:face-meh",
	});
}

export default Component;
