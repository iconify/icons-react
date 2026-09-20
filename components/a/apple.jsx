import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wj1sciq_w.css';
import '../../css/m/maav1jb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wj1sciq_w"/><path class="maav1jb2k"/></g>`,
		"fallback": "lucide:apple",
	});
}

export default Component;
