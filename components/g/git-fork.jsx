import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/giey3ccde.css';
import '../../css/j/jsuc-q3of.css';
import '../../css/b/byf74_xsd.css';
import '../../css/r/r3noqacui.css';
import '../../css/i/ii-voubgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="giey3ccde"/><path class="jsuc-q3of"/><path class="byf74_xsd"/><path class="r3noqacui"/><path class="ii-voubgb"/></g>`,
		"fallback": "iconaut:git-fork",
	});
}

export default Component;
