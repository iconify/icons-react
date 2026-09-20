import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fndgsfbhl.css';
import '../../css/o/ooafjrbnh.css';
import '../../css/v/vd27ehbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fndgsfbhl"/><path class="ooafjrbnh"/><path class="vd27ehbog"/>`,
		"fallback": "pixel:face-sad",
	});
}

export default Component;
