import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n0jgj9b1n.css';
import '../../css/k/k64a2fhzl.css';
import '../../css/g/ghqnobbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n0jgj9b1n"/><path class="k64a2fhzl"/><path class="ghqnobbvu"/></g>`,
		"fallback": "streamline-sharp:empty-recycle-bin-1",
	});
}

export default Component;
