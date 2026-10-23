import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yr0_m1huc.css';
import '../../css/i/ichyab9mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yr0_m1huc"/><path class="ichyab9mm"/></g>`,
		"fallback": "vadivam:folder-git-2",
	});
}

export default Component;
