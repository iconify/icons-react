import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xw6lefb7b.css';
import '../../css/y/yeui5c1nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xw6lefb7b"/><path class="yeui5c1nt"/></g>`,
		"fallback": "tabler:circle-arrow-down-left",
	});
}

export default Component;
