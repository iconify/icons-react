import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d2bswibsh.css';
import '../../css/c/cvi76znce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d2bswibsh"/><path class="cvi76znce"/></g>`,
		"fallback": "hugeicons:copy-slash",
	});
}

export default Component;
