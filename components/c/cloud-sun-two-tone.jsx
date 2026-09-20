import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cy44qgphq.css';
import '../../css/a/a33ex_7nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cy44qgphq"/><path class="a33ex_7nh"/></g>`,
		"fallback": "keyline-icons:cloud-sun-two-tone",
	});
}

export default Component;
