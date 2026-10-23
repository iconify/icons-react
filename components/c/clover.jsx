import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kp3dq0o0w.css';
import '../../css/y/yjgorn1co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kp3dq0o0w"/><path class="yjgorn1co"/></g>`,
		"fallback": "vadivam:clover",
	});
}

export default Component;
