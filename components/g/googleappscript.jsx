import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xte2y8b6s.css';
import '../../css/y/ygqhxjblw.css';
import '../../css/s/stpu0nbcx.css';
import '../../css/o/ob2lfwuos.css';
import '../../css/z/zu7l1lbjf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xte2y8b6s"/><path class="ygqhxjblw"/><path class="stpu0nbcx"/><path class="ob2lfwuos"/><path class="zu7l1lbjf"/>`,
		"fallback": "devicon:googleappscript",
	});
}

export default Component;
