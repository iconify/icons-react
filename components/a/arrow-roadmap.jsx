import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z7r3y6e4i.css';
import '../../css/a/axvn-0b2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="z7r3y6e4i"/><path class="axvn-0b2b"/></g>`,
		"fallback": "streamline-plump:arrow-roadmap",
	});
}

export default Component;
