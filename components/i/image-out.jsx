import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8jfvghla.css';
import '../../css/m/mebertbuh.css';
import '../../css/r/rbt5rrbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t8jfvghla"/><path class="mebertbuh"/><path class="rbt5rrbbl"/></g>`,
		"fallback": "andrsrxn:image-out",
	});
}

export default Component;
