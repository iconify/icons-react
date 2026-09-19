import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byi38ackq.css';

const viewBox = {"width":2304,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byi38ackq"/>`,
		"fallback": "fa:free-code-camp",
	});
}

export default Component;
