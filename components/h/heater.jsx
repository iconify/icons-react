import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ex-6rrbdg.css';
import '../../css/l/lroa9eb4n.css';
import '../../css/s/sbkoykbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ex-6rrbdg wm-k"/><path class="lroa9eb4n"/><path class="sbkoykbeq wm-s"/></g>`,
		"fallback": "withicons-bauhaus:heater",
	});
}

export default Component;
