import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/g/goex19x9j.css';
import '../../css/u/uuvf3rj3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="goex19x9j"/><path class="uuvf3rj3n"/></g>`,
		"fallback": "tdesign:file-restore",
	});
}

export default Component;
