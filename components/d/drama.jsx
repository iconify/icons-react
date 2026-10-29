import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x752294kp.css';
import '../../css/j/jb97shjez.css';
import '../../css/v/vuyokqbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x752294kp"/><path class="jb97shjez"/><path class="vuyokqbpr"/></g>`,
		"fallback": "vadivam:drama",
	});
}

export default Component;
