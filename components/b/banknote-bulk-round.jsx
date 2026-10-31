import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghgy_mbzi.css';
import '../../css/z/zkuu4btdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ghgy_mbzi"/><path class="zkuu4btdm"/></g>`,
		"fallback": "coolicons:banknote-bulk-round",
	});
}

export default Component;
