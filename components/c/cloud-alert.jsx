import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cvilh7buk.css';
import '../../css/g/g56b45b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cvilh7buk"/><path class="g56b45b0x wm-a"/></g>`,
		"fallback": "withicons:cloud-alert",
	});
}

export default Component;
