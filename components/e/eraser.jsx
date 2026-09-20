import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l6yllhb1f.css';
import '../../css/m/mfzrz-bpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="l6yllhb1f"/><path class="mfzrz-bpq"/></g>`,
		"fallback": "streamline-plump-color:eraser",
	});
}

export default Component;
