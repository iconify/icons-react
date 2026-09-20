import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o90ey1bfa.css';
import '../../css/l/lzv3bwb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o90ey1bfa"/><path class="lzv3bwb-e"/></g>`,
		"fallback": "vadivam:cloud-upload",
	});
}

export default Component;
