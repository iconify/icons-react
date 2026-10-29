import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc715-kwz.css';
import '../../css/h/hustz32ji.css';
import '../../css/a/aqstzpbjn.css';
import '../../css/h/h48zvybiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yc715-kwz"/><path class="hustz32ji wm-a"/><path class="aqstzpbjn wm-a"/><path class="h48zvybiq wm-a"/>`,
		"fallback": "withicons-bauhaus:clipboard-list",
	});
}

export default Component;
