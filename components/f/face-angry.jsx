import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn8pw1bah.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn8pw1bah"/><path class="ooafjrbnh"/>`,
		"fallback": "pixel:face-angry",
	});
}

export default Component;
