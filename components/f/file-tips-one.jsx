import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja411-5kh.css';
import '../../css/u/uzlnq8nyl.css';
import '../../css/p/p5fvr-byr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ja411-5kh"/><path clip-rule="evenodd" class="uzlnq8nyl"/><path class="p5fvr-byr"/></g>`,
		"fallback": "icon-park-outline:file-tips-one",
	});
}

export default Component;
