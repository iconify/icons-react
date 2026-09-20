import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d11qadc1n.css';
import '../../css/g/gi7mpdn6r.css';
import '../../css/q/q5of8sbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="d11qadc1n"/><path class="gi7mpdn6r"/><path class="q5of8sbys"/></g>`,
		"fallback": "streamline-plump:diamond-1",
	});
}

export default Component;
