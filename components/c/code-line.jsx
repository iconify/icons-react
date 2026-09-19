import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c80hh1xpf.css';
import '../../css/z/ze3pztb9b.css';
import '../../css/q/qnhtqjloi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c80hh1xpf clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 ze3pztb9b"/><path class="clr-i-outline clr-i-outline-path-3 qnhtqjloi"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:code-line",
	});
}

export default Component;
