import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eusd4acvh.css';
import '../../css/j/j3crdysra.css';
import '../../css/s/sbcgckbbe.css';
import '../../css/u/ubdnfdbet.css';
import '../../css/a/ag6l6x2vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eusd4acvh wm-shadow"/><path class="j3crdysra"/><path class="sbcgckbbe"/><path class="ubdnfdbet"/><path class="ag6l6x2vj"/></g>`,
		"fallback": "withicons-retro:avatar-bear",
	});
}

export default Component;
