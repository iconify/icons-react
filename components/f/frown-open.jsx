import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9xru4bpm.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9xru4bpm"/>`,
		"fallback": "fa-regular:frown-open",
	});
}

export default Component;
