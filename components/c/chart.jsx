import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecsrbub4u.css';
import '../../css/h/hctxwybqm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecsrbub4u"/><path class="hctxwybqm"/>`,
		"fallback": "ooui:chart",
	});
}

export default Component;
