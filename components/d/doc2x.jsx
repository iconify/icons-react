import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nx3wpk5gx.css';
import '../../css/n/nwois8byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nx3wpk5gx"/><path class="nwois8byk"/></g>`,
		"fallback": "thesvg:doc2x",
	});
}

export default Component;
