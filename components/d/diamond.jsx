import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/r/rrllyrdux.css';
import '../../css/w/wen9dw8oq.css';
import '../../css/o/ofq-74nov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="rrllyrdux"/><path class="wen9dw8oq"/><path class="ofq-74nov"/></g>`,
		"fallback": "doodle-icons:diamond",
	});
}

export default Component;
