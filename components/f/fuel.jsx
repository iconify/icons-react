import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlroo4bwv.css';
import '../../css/k/kjftorklk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vlroo4bwv"/><path class="kjftorklk wm-a"/></g>`,
		"fallback": "withicons:fuel",
	});
}

export default Component;
