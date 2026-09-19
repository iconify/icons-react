import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/otqdlxboo.css';
import '../../css/g/gq8g9_bnj.css';
import '../../css/w/wsl0tzbfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><circle class="otqdlxboo"/><path class="gq8g9_bnj"/><path class="wsl0tzbfj"/></g>`,
		"fallback": "icon-park-solid:classroom",
	});
}

export default Component;
