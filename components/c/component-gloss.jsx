import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/alend009w.css';
import '../../css/m/md8ioxb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="alend009w wm-k"/><path class="md8ioxb2g wm-a"/></g>`,
		"fallback": "withicons:component-gloss",
	});
}

export default Component;
