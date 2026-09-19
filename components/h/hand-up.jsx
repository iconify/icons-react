import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3b_mmbom.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3b_mmbom"/>`,
		"fallback": "el:hand-up",
	});
}

export default Component;
