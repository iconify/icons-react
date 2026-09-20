import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6e6_zbmu.css';
import '../../css/s/s_ffcgb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h6e6_zbmu"/><rect class="s_ffcgb8o"/></g>`,
		"fallback": "lucide:arrow-down-1-0",
	});
}

export default Component;
