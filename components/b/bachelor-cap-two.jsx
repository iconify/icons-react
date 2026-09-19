import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x4rmk8quk.css';
import '../../css/u/uybie1zay.css';
import '../../css/h/hwo5o2leu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x4rmk8quk"/><path class="uybie1zay"/><path class="hwo5o2leu"/></g>`,
		"fallback": "icon-park-solid:bachelor-cap-two",
	});
}

export default Component;
