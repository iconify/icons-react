import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/h7q8geb_w.css';
import '../../css/z/zhpszsu4q.css';
import '../../css/x/xpygl7bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="h7q8geb_w"/><path class="zhpszsu4q"/><path class="xpygl7bep"/></g>`,
		"fallback": "hugeicons:file-view",
	});
}

export default Component;
