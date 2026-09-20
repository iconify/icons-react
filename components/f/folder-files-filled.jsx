import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ipm975hdc.css';
import '../../css/k/kxq-picmp.css';
import '../../css/q/qqwtvdb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ipm975hdc"/><path clip-rule="evenodd" class="kxq-picmp"/><path class="qqwtvdb2b"/></g>`,
		"fallback": "reicon:folder-files-filled",
	});
}

export default Component;
