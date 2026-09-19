import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/haa2czbgj.css';
import '../../css/g/gcng8vetl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="haa2czbgj"/><path class="gcng8vetl"/></g>`,
		"fallback": "icon-park-outline:home-two",
	});
}

export default Component;
