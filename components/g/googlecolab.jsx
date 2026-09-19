import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2tgebcxx.css';
import '../../css/b/bd3d8z14l.css';
import '../../css/g/gnu68mb9o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2tgebcxx"/><path class="bd3d8z14l"/><path class="gnu68mb9o"/>`,
		"fallback": "devicon:googlecolab",
	});
}

export default Component;
