import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kzfbw8bhx.css';
import '../../css/g/gor7pb1cv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="kzfbw8bhx"/><path class="gor7pb1cv"/></g>`,
		"fallback": "cryptocurrency-color:cred",
	});
}

export default Component;
