import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfshgnrzh.css';
import '../../css/a/ax2b_7zys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vfshgnrzh"/><path class="ax2b_7zys"/></g>`,
		"fallback": "vadivam:folder-dot",
	});
}

export default Component;
