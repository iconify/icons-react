import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-34asx2t.css';
import '../../css/p/potp25y_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j-34asx2t"/><path class="potp25y_x"/></g>`,
		"fallback": "keyline-icons:arrow-in-left-dashed-panel-two-tone",
	});
}

export default Component;
