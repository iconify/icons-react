import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zp9e8lzjd.css';
import '../../css/x/xnw6e-b9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="zp9e8lzjd"/><path class="xnw6e-b9l"/></g>`,
		"fallback": "cryptocurrency-color:gbp",
	});
}

export default Component;
