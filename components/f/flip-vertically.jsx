import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v1s64tbtd.css';
import '../../css/i/icewu1b5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="v1s64tbtd"/><path class="icewu1b5i"/></g>`,
		"fallback": "icon-park-solid:flip-vertically",
	});
}

export default Component;
