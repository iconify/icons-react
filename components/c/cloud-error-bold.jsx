import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wfacx6kkn.css';
import '../../css/v/v71a0vb8l.css';
import '../../css/x/xqqjd7b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wfacx6kkn"/><path class="v71a0vb8l"/><path class="xqqjd7b7j"/></g>`,
		"fallback": "iconamoon:cloud-error-bold",
	});
}

export default Component;
