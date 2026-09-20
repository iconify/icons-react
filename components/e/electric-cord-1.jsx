import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/ceu6ypbbo.css';
import '../../css/c/cor_1wsgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ceu6ypbbo"/><path class="cor_1wsgy"/></g>`,
		"fallback": "streamline-plump:electric-cord-1",
	});
}

export default Component;
