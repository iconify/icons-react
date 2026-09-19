import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tz-4bx35q.css';
import '../../css/b/bmp-g8bcq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="tz-4bx35q"/><path class="bmp-g8bcq"/></g>`,
		"fallback": "cryptocurrency-color:ebst",
	});
}

export default Component;
