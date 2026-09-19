import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/aazs_0sjf.css';
import '../../css/g/gyui38byj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="aazs_0sjf"/><path class="gyui38byj"/></g>`,
		"fallback": "icon-park-outline:align-bottom",
	});
}

export default Component;
