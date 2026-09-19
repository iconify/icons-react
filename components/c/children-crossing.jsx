import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmi88ub0w.css';
import '../../css/s/sjha02btc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmi88ub0w"/><path class="sjha02btc"/></g>`,
		"fallback": "fluent-emoji-flat:children-crossing",
	});
}

export default Component;
