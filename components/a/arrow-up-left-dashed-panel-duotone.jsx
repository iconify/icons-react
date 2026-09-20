import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vxfx8lbfs.css';
import '../../css/a/afn_a9b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vxfx8lbfs"/><path class="afn_a9b2v"/></g>`,
		"fallback": "keyline-icons:arrow-up-left-dashed-panel-duotone",
	});
}

export default Component;
