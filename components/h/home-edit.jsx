import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bme6v9bvm.css';
import '../../css/z/zfc_isb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bme6v9bvm"/><path class="zfc_isb6d"/></g>`,
		"fallback": "tabler:home-edit",
	});
}

export default Component;
