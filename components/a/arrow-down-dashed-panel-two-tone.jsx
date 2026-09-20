import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-34asx2t.css';
import '../../css/w/wq951pbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j-34asx2t"/><path class="wq951pbnw"/></g>`,
		"fallback": "keyline-icons:arrow-down-dashed-panel-two-tone",
	});
}

export default Component;
