import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spbohtbnc.css';
import '../../css/r/r84p9ezvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="spbohtbnc"/><path class="r84p9ezvo wm-a"/></g>`,
		"fallback": "withicons:backpack",
	});
}

export default Component;
