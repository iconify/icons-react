import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_kxo3vjf.css';
import '../../css/y/ycj4854jp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_kxo3vjf"/><path transform="matrix(125.07186 0 0 96.75291 2539.419 -100217.58)" class="ycj4854jp"/>`,
		"fallback": "bpmn:default-flow",
	});
}

export default Component;
