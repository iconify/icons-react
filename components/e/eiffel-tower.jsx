import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/ficsk2bir.css';
import '../../css/p/p6oaylbds.css';
import '../../css/m/m8lwrfbbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ficsk2bir"/><path class="p6oaylbds"/><path class="m8lwrfbbj"/></g>`,
		"fallback": "icon-park-outline:eiffel-tower",
	});
}

export default Component;
