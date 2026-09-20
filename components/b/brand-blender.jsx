import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ms283pbem.css';
import '../../css/v/vwjnavbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ms283pbem"/><path class="vwjnavbxx"/></g>`,
		"fallback": "tabler:brand-blender",
	});
}

export default Component;
