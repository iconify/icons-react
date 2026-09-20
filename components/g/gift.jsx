import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kersmsb5m.css';
import '../../css/n/nne76r2us.css';
import '../../css/k/kug4hbc3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kersmsb5m"/><path class="nne76r2us"/><path class="kug4hbc3e"/></g>`,
		"fallback": "streamline-plump-color:gift",
	});
}

export default Component;
