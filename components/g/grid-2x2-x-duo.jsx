import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmg49dq7u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iye6zdbmz.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/y/ycawehbdj.css';
import '../../css/r/rqbnl5bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wmg49dq7u"/><g class="dt0cm9dhy primary"><path class="iye6zdbmz"/><path class="cfkicbk9n"/><path class="ycawehbdj"/><path class="rqbnl5bte"/></g>`,
		"fallback": "iconaut:grid-2x2-x-duo",
	});
}

export default Component;
