import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ihaf_gb0w.css';
import '../../css/t/thwmpnbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ihaf_gb0w"/><path class="thwmpnbhe"/></g>`,
		"fallback": "vadivam:image-minus",
	});
}

export default Component;
