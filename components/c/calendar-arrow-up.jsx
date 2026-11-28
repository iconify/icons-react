import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4-dx9tsw.css';
import '../../css/x/x6o7ktb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4-dx9tsw"/><path class="x6o7ktb9w"/></g>`,
		"fallback": "lucide:calendar-arrow-up",
	});
}

export default Component;
