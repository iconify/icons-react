import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxp903brx.css';
import '../../css/c/c4a7vbgmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxp903brx"/><path class="c4a7vbgmn"/></g>`,
		"fallback": "vadivam:git-fork",
	});
}

export default Component;
