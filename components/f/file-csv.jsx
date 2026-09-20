import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/p/po4pmpbrx.css';
import '../../css/z/z94c2jbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="po4pmpbrx"/><path class="z94c2jbzd"/></g>`,
		"fallback": "tdesign:file-csv",
	});
}

export default Component;
