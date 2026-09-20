import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ovaf7lgye.css';
import '../../css/z/z8inw5rzt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ovaf7lgye"/><path class="z8inw5rzt"/></g>`,
		"fallback": "streamline-color:cloud-share-flat",
	});
}

export default Component;
