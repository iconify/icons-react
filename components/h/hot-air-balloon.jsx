import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u0sc6c07n.css';
import '../../css/z/zystp7bfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u0sc6c07n"/><path class="zystp7bfg"/></g>`,
		"fallback": "streamline-plump:hot-air-balloon",
	});
}

export default Component;
