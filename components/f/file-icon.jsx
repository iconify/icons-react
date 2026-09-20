import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/p/po4pmpbrx.css';
import '../../css/u/u-gp5oztk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="po4pmpbrx"/><path class="u-gp5oztk"/></g>`,
		"fallback": "tdesign:file-icon",
	});
}

export default Component;
