import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aym2gmi6q.css';
import '../../css/y/yr7d5vtia.css';
import '../../css/o/o-y-5acxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aym2gmi6q"/><path class="yr7d5vtia"/><path class="o-y-5acxr"/></g>`,
		"fallback": "solar:corkscrew-linear",
	});
}

export default Component;
