import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vdyk84bdd.css';
import '../../css/q/qbmxxsbra.css';
import '../../css/r/ryjqceb3q.css';
import '../../css/q/qbzlvdb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vdyk84bdd wm-shadow"/><path class="qbmxxsbra wm-shadow"/><path class="ryjqceb3q"/><path class="qbzlvdb3n"/></g>`,
		"fallback": "withicons-brutal:avatar-cat",
	});
}

export default Component;
