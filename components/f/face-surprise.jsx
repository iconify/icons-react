import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxw3o-bgr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxw3o-bgr"/>`,
		"fallback": "fa7-regular:face-surprise",
	});
}

export default Component;
