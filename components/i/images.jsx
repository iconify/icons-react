import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0dsan2jy.css';
import '../../css/q/q4i1mm1-a.css';
import '../../css/t/tqnz3b5ap.css';
import '../../css/d/dahalbmwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0dsan2jy wm-k"/><path class="q4i1mm1-a wm-k"/><path class="tqnz3b5ap wm-a"/><path class="dahalbmwa wm-k"/>`,
		"fallback": "withicons-bauhaus:images",
	});
}

export default Component;
