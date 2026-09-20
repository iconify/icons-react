import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6shpkbbb.css';
import '../../css/u/utt1ljvnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t6shpkbbb"/><path clip-rule="evenodd" class="utt1ljvnx"/></g>`,
		"fallback": "reicon:floppy2",
	});
}

export default Component;
