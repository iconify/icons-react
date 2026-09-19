import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d777w44ag.css';
import '../../css/c/c9yx--bxi.css';
import '../../css/z/zpen0xb1i.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d777w44ag"/><circle class="c9yx--bxi"/><path class="zpen0xb1i"/>`,
		"fallback": "clarity:crown-line",
	});
}

export default Component;
