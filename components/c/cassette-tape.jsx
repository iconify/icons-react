import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/levjh9b6m.css';
import '../../css/x/x5bhhcb4p.css';
import '../../css/s/s3bm4ibrd.css';
import '../../css/z/zmwqzbplb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="levjh9b6m"/><path class="x5bhhcb4p"/><path class="s3bm4ibrd"/><path class="zmwqzbplb"/></g>`,
		"fallback": "andrsrxn:cassette-tape",
	});
}

export default Component;
