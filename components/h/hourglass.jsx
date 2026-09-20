import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o90t5po6t.css';
import '../../css/m/m-hn-ib-a.css';
import '../../css/p/prq-gxbgq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o90t5po6t"/><path class="m-hn-ib-a"/><path class="prq-gxbgq"/></g>`,
		"fallback": "streamline-flex-color:hourglass",
	});
}

export default Component;
