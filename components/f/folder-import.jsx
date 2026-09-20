import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/m/m7thfq2fv.css';
import '../../css/d/d9p6_wbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="m7thfq2fv"/><path class="d9p6_wbkc"/></g>`,
		"fallback": "tdesign:folder-import",
	});
}

export default Component;
