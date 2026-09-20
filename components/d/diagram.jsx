import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/igvsw7bfy.css';
import '../../css/t/tkt7gyrls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="igvsw7bfy"/><path class="tkt7gyrls"/></g>`,
		"fallback": "reicon:diagram",
	});
}

export default Component;
