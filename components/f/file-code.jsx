import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tuk6cqr0l.css';
import '../../css/j/js_oh4-0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tuk6cqr0l"/><path class="js_oh4-0l"/></g>`,
		"fallback": "matita:file-code",
	});
}

export default Component;
