import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fej6-wblt.css';
import '../../css/f/fk97eubrf.css';
import '../../css/o/oiuah7msq.css';
import '../../css/z/z7jnd8bsx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fej6-wblt"/><path class="fk97eubrf"/><path class="oiuah7msq"/><path class="z7jnd8bsx"/></g>`,
		"fallback": "fluent-emoji-flat:hourglass-done",
	});
}

export default Component;
