import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gm_hipbru.css';
import '../../css/s/s-o8mpbkg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="gm_hipbru"/><path class="s-o8mpbkg"/></g>`,
		"fallback": "cryptocurrency-color:act",
	});
}

export default Component;
