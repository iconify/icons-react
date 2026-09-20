import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ys3zi_b1h.css';
import '../../css/j/jxdn-abos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ys3zi_b1h"/><path class="jxdn-abos"/></g>`,
		"fallback": "streamline-plump:gameboy",
	});
}

export default Component;
