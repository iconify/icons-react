import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ni2yci9vp.css';
import '../../css/z/zds66r9hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ni2yci9vp"/><path class="zds66r9hy"/></g>`,
		"fallback": "keyline-icons:folder-tree-duotone",
	});
}

export default Component;
