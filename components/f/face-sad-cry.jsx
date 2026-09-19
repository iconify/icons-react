import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv01ljeqp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv01ljeqp"/>`,
		"fallback": "fa7-regular:face-sad-cry",
	});
}

export default Component;
