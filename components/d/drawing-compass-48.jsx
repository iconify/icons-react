import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inizydo0z.css';
import '../../css/q/qy7v0ra7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inizydo0z"/><path class="qy7v0ra7k"/>`,
		"fallback": "energy-icons:drawing-compass-48",
	});
}

export default Component;
