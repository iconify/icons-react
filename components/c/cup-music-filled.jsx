import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n71xjbcbt.css';
import '../../css/q/qbmgmeber.css';
import '../../css/k/k0b7xsfel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n71xjbcbt"/><path clip-rule="evenodd" class="qbmgmeber"/><path class="k0b7xsfel"/></g>`,
		"fallback": "reicon:cup-music-filled",
	});
}

export default Component;
