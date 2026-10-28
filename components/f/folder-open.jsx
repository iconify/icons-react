import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uubqkbb-e.css';
import '../../css/v/vf4fx3y_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uubqkbb-e"/><path class="vf4fx3y_a"/></g>`,
		"fallback": "codex:folder-open",
	});
}

export default Component;
