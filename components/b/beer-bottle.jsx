import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o-59dh1-x.css';
import '../../css/t/t-juw-ftj.css';
import '../../css/h/h5ats917a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o-59dh1-x"/><path class="t-juw-ftj"/><path class="h5ats917a"/></g>`,
		"fallback": "iconaut:beer-bottle",
	});
}

export default Component;
