import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/d/djxofjbue.css';
import '../../css/e/euzjwdbwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="djxofjbue"/><path class="euzjwdbwe"/></g>`,
		"fallback": "streamline-plump:camera-1",
	});
}

export default Component;
