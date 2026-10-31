import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dyunt-bon.css';
import '../../css/p/pyhjy9bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dyunt-bon"/><path class="pyhjy9bbp"/></g>`,
		"fallback": "coolicons:git-fork-duocolor-round",
	});
}

export default Component;
