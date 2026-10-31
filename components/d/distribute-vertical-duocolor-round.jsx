import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6jxipbvu.css';
import '../../css/q/q6hpak9ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6jxipbvu"/><path class="q6hpak9ax"/></g>`,
		"fallback": "coolicons:distribute-vertical-duocolor-round",
	});
}

export default Component;
