import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xcr6spbwb.css';
import '../../css/g/g3luosfep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xcr6spbwb"/><path class="g3luosfep"/></g>`,
		"fallback": "keyline-icons:folder-arrow-down-two-tone",
	});
}

export default Component;
