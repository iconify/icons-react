import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/f/fiogixb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yhtn9ti7t"/><path class="fiogixb5h wm-a"/></g>`,
		"fallback": "withicons:cake",
	});
}

export default Component;
