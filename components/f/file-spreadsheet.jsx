import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/e/e4i9ibbok.css';
import '../../css/v/veax45l-q.css';
import '../../css/x/x282zm2qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="e4i9ibbok"/><path class="veax45l-q"/><path class="x282zm2qr"/></g>`,
		"fallback": "withicons-brutal:file-spreadsheet",
	});
}

export default Component;
