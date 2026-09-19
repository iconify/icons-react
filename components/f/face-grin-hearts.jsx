import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaip9j5ck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaip9j5ck"/>`,
		"fallback": "fa6-regular:face-grin-hearts",
	});
}

export default Component;
