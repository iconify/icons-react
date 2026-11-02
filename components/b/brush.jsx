import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d9kplxbfn.css';
import '../../css/a/a5r5lvb1n.css';
import '../../css/p/plpw9sb1i.css';
import '../../css/b/b6cya0bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="d9kplxbfn"/><path class="a5r5lvb1n"/><path class="plpw9sb1i"/><path class="b6cya0bdn"/></g>`,
		"fallback": "matita:brush",
	});
}

export default Component;
