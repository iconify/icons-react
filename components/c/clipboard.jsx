import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ctc8bmi.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2ctc8bmi"/>`,
		"fallback": "fa6-solid:clipboard",
	});
}

export default Component;
