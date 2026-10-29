import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/ny-r4ppyn.css';
import '../../css/d/d2by5bbzf.css';
import '../../css/n/n_f93k4ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ny-r4ppyn wm-k"/><path class="d2by5bbzf wm-a"/><path class="n_f93k4ny"/></g>`,
		"fallback": "withicons-bauhaus:dices",
	});
}

export default Component;
