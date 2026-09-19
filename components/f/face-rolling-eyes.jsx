import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rikvh-b4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rikvh-b4z"/>`,
		"fallback": "fa6-regular:face-rolling-eyes",
	});
}

export default Component;
