import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vg4pj6b7v.css';
import '../../css/t/t_hl83buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vg4pj6b7v"/><path class="t_hl83buc"/></g>`,
		"fallback": "lucide:folder-bookmark",
	});
}

export default Component;
