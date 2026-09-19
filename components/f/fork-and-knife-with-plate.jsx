import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmao8sg7p.css';
import '../../css/u/udi1b0fzv.css';
import '../../css/o/oyp3k4snw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmao8sg7p"/><path class="udi1b0fzv"/><path class="oyp3k4snw"/></g>`,
		"fallback": "fluent-emoji-flat:fork-and-knife-with-plate",
	});
}

export default Component;
