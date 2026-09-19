import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfd85mq7p.css';
import '../../css/t/tdi20-bhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfd85mq7p"/><path class="tdi20-bhp"/>`,
		"fallback": "carbon:flagging-taxi",
	});
}

export default Component;
