import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2hwgjb6s.css';
import '../../css/r/rz-kf9goe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l2hwgjb6s"/><path class="rz-kf9goe"/></g>`,
		"fallback": "vadivam:folder-up",
	});
}

export default Component;
