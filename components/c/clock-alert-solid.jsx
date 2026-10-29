import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/adc6e8b5p.css';
import '../../css/x/xrjt6zbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="adc6e8b5p"/><path class="wm-s xrjt6zbqp"/></g>`,
		"fallback": "withicons:clock-alert-solid",
	});
}

export default Component;
