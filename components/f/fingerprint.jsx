import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8d49kbah.css';
import '../../css/b/b83109hix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d8d49kbah"/><path class="b83109hix"/></g>`,
		"fallback": "tabler:fingerprint",
	});
}

export default Component;
