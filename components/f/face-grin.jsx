import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5lee5t5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5lee5t5w"/>`,
		"fallback": "fa6-regular:face-grin",
	});
}

export default Component;
