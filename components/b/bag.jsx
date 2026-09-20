import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m76sovb8j.css';
import '../../css/g/ga0bor7dq.css';
import '../../css/k/kq8n4699o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="m76sovb8j"/><path class="ga0bor7dq"/><path class="kq8n4699o"/></g>`,
		"fallback": "streamline-plump-color:bag",
	});
}

export default Component;
