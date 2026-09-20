import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zaw36qhly.css';
import '../../css/l/lf8db52xx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="zaw36qhly"/><path class="lf8db52xx"/></g>`,
		"fallback": "streamline-plump:clean-broom-wipe",
	});
}

export default Component;
