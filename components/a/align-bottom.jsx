import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/djc53eqdp.css';
import '../../css/g/gyui38byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="djc53eqdp"/><path class="gyui38byj"/></g>`,
		"fallback": "icon-park-solid:align-bottom",
	});
}

export default Component;
