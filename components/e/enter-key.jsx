import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/w/w469cibht.css';
import '../../css/t/tt5t1448b.css';
import '../../css/k/k-np5vtwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="w469cibht"/><path class="tt5t1448b"/><path class="k-np5vtwy"/></g>`,
		"fallback": "streamline-kameleon-color:enter-key",
	});
}

export default Component;
