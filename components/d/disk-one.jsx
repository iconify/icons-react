import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g96sazbxl.css';
import '../../css/b/bo-coebrs.css';
import '../../css/f/fxsft62au.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="g96sazbxl"/><path class="bo-coebrs"/><path class="fxsft62au"/></g>`,
		"fallback": "icon-park-outline:disk-one",
	});
}

export default Component;
