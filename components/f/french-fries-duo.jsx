import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppd78f9kg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dq3ueh2oc.css';
import '../../css/t/teh9ljbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppd78f9kg secondary"/><g class="dt0cm9dhy primary"><path class="dq3ueh2oc"/><path class="teh9ljbuc"/></g>`,
		"fallback": "iconaut:french-fries-duo",
	});
}

export default Component;
