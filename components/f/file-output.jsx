import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ko5m8cp9r.css';
import '../../css/y/ydev6gb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ko5m8cp9r"/><path class="ydev6gb7w"/></g>`,
		"fallback": "lucide:file-output",
	});
}

export default Component;
