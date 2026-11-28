import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nepakkbcm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/visjtcbxe.css';
import '../../css/u/uzchd2xdt.css';
import '../../css/j/j8bxxx5do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nepakkbcm secondary"/><g class="dt0cm9dhy primary"><path class="visjtcbxe"/><path class="uzchd2xdt"/><path class="j8bxxx5do"/></g>`,
		"fallback": "iconaut:foldable-stand-duo",
	});
}

export default Component;
