import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxpbxbbyq.css';
import '../../css/w/w2ttvibvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xxpbxbbyq"/><path class="w2ttvibvt"/></g>`,
		"fallback": "keyline-icons:git-merge-conflict-duotone",
	});
}

export default Component;
