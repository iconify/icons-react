import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjngycc7b.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjngycc7b"/><path class="ooafjrbnh"/>`,
		"fallback": "pixel:face-laugh-squint",
	});
}

export default Component;
