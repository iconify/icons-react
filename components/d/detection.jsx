import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t5zimacvy.css';
import '../../css/y/yxfmyet3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="t5zimacvy"/><path class="yxfmyet3v"/></g>`,
		"fallback": "icon-park-outline:detection",
	});
}

export default Component;
