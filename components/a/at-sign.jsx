import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gxx9aj57l.css';
import '../../css/i/i3l0rvbjp.css';
import '../../css/e/e0pys6b2e.css';
import '../../css/a/a876wccoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gxx9aj57l"/><path class="i3l0rvbjp"/><path class="e0pys6b2e"/><path class="a876wccoe"/></g>`,
		"fallback": "matita:at-sign",
	});
}

export default Component;
