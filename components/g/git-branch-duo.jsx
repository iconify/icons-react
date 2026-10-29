import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vr-8j8bin.css';
import '../../css/c/ce-slac7d.css';
import '../../css/l/l7jhf3bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vr-8j8bin"/><path class="ce-slac7d"/><path class="l7jhf3bei"/></g>`,
		"fallback": "withicons:git-branch-duo",
	});
}

export default Component;
