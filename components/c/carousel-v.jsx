import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwa3mixdc.css';
import '../../css/a/a3mjwzvtg.css';
import '../../css/v/vi6r83tsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uwa3mixdc"/><path clip-rule="evenodd" class="a3mjwzvtg"/><path class="vi6r83tsi"/></g>`,
		"fallback": "reicon:carousel-v",
	});
}

export default Component;
