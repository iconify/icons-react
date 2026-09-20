import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m4t62pd7b.css';
import '../../css/d/drhtb8b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m4t62pd7b"/><path class="drhtb8b7q"/></g>`,
		"fallback": "lucide-lab:football-goal",
	});
}

export default Component;
