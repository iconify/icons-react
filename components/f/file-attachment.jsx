import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/u/ufffrnb-r.css';
import '../../css/h/hdgdwjbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="ufffrnb-r"/><path class="hdgdwjbgw"/></g>`,
		"fallback": "tdesign:file-attachment",
	});
}

export default Component;
