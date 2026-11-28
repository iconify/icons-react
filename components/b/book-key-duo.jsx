import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0sxejbew.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/d/d962hab1x.css';
import '../../css/j/jqu4q6bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u0sxejbew"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="d962hab1x"/><path class="jqu4q6bku"/></g>`,
		"fallback": "iconaut:book-key-duo",
	});
}

export default Component;
