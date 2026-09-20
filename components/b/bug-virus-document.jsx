import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcj17wbop.css';
import '../../css/c/cdetnwb_d.css';
import '../../css/p/pqpmhlj9m.css';
import '../../css/k/kayvr8bla.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pcj17wbop"/><path class="cdetnwb_d"/><path class="pqpmhlj9m"/><path class="kayvr8bla"/></g>`,
		"fallback": "streamline-color:bug-virus-document",
	});
}

export default Component;
