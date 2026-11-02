import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/pcpxevbnv.css';
import '../../css/l/l-edodtcw.css';
import '../../css/s/stgxqybjo.css';
import '../../css/n/ni5imk9ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="pcpxevbnv"/><path class="l-edodtcw"/><path class="stgxqybjo"/><path class="ni5imk9ay"/></g>`,
		"fallback": "matita:cell",
	});
}

export default Component;
