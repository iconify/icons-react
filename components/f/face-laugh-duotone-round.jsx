import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhwog2b5s.css';
import '../../css/h/hpoqrobza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bhwog2b5s"/><path class="hpoqrobza"/></g>`,
		"fallback": "coolicons:face-laugh-duotone-round",
	});
}

export default Component;
