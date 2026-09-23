import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlq-m1bez.css';
import '../../css/o/ou5ls9mon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlq-m1bez"/><path class="ou5ls9mon"/></g>`,
		"fallback": "keyline-icons:chart-bar-sparkles",
	});
}

export default Component;
