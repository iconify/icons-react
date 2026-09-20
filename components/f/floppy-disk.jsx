import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/d/dd8bl5bbm.css';
import '../../css/z/z7psoab5m.css';
import '../../css/e/e4aw4xbir.css';
import '../../css/f/fmg0zibqy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="dd8bl5bbm"/><path clip-rule="evenodd" class="z7psoab5m"/></g><path clip-rule="evenodd" class="e4aw4xbir"/><path clip-rule="evenodd" class="fmg0zibqy"/></g>`,
		"fallback": "pepicons-print:floppy-disk",
	});
}

export default Component;
