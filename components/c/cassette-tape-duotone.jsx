import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q050sk4js.css';
import '../../css/o/oftlfvbfd.css';
import '../../css/q/qyrihfbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q050sk4js"/><path class="oftlfvbfd"/><path clip-rule="evenodd" class="qyrihfbrf"/></g>`,
		"fallback": "lucide-extended:cassette-tape-duotone",
	});
}

export default Component;
