import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0rw30bsn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0rw30bsn"/>`,
		"fallback": "fa7-regular:hand-back-fist",
	});
}

export default Component;
