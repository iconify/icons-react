import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgy072b_c.css';
import '../../css/z/zds66r9hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="lgy072b_c"/><path class="zds66r9hy"/></g>`,
		"fallback": "keyline-icons:folder-tree-fill",
	});
}

export default Component;
