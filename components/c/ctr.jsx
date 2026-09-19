import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rtw0cd83v.css';
import '../../css/s/sajduhjaw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="rtw0cd83v"/><path class="sajduhjaw"/></g>`,
		"fallback": "cryptocurrency-color:ctr",
	});
}

export default Component;
