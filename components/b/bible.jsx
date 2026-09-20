import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xq10pbcra.css';
import '../../css/z/z-b8tkbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xq10pbcra"/><path class="z-b8tkbxl"/></g>`,
		"fallback": "tabler:bible",
	});
}

export default Component;
