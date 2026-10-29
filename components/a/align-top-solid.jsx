import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gaw9n8_qt.css';
import '../../css/p/p2c2nhb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gaw9n8_qt"/><path class="p2c2nhb6v wm-a"/></g>`,
		"fallback": "withicons:align-top-solid",
	});
}

export default Component;
