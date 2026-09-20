import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5iom388o.css';
import '../../css/w/wqkckabri.css';
import '../../css/w/wesz6jbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5iom388o"/><path class="wqkckabri"/><path class="wesz6jbcx"/></g>`,
		"fallback": "reicon:circle-arrows-right-duotone",
	});
}

export default Component;
