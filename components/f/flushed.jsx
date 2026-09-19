import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikr30cc0m.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikr30cc0m"/>`,
		"fallback": "fa-regular:flushed",
	});
}

export default Component;
