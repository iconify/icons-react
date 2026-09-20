import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxlnqwbll.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxlnqwbll"/><path class="ooafjrbnh"/>`,
		"fallback": "pixel:creative-commons",
	});
}

export default Component;
