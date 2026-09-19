import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/snuu6nbmg.css';
import '../../css/h/h4-__3b9e.css';
import '../../css/j/j2qre1brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="snuu6nbmg"/><path class="h4-__3b9e"/><path class="j2qre1brj"/></g>`,
		"fallback": "iconoir:glass-empty",
	});
}

export default Component;
