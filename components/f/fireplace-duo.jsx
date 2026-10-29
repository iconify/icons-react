import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l9djeq8yk.css';
import '../../css/j/jrfoe58yb.css';
import '../../css/d/dg5kmnbiz.css';
import '../../css/p/pfodkzbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l9djeq8yk"/><path class="jrfoe58yb wm-a"/><path class="dg5kmnbiz wm-a"/><path class="pfodkzbrw"/></g>`,
		"fallback": "withicons:fireplace-duo",
	});
}

export default Component;
