import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/peniq4-zy.css';
import '../../css/h/h_9tkub7q.css';
import '../../css/z/ztimj1q5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="peniq4-zy"/><path class="h_9tkub7q"/><path class="ztimj1q5g"/></g>`,
		"fallback": "iconamoon:folder-image-thin",
	});
}

export default Component;
