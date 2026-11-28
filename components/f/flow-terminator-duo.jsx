import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kla4l8gus.css';
import '../../css/w/wd9q9w1ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kla4l8gus secondary"/><path class="primary wd9q9w1ik"/>`,
		"fallback": "iconaut:flow-terminator-duo",
	});
}

export default Component;
