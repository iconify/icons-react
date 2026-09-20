import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/st5p9pbnc.css';
import '../../css/t/t4mczkbvq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="st5p9pbnc"/><path class="t4mczkbvq"/></g>`,
		"fallback": "streamline-plump-color:airport-security-flat",
	});
}

export default Component;
